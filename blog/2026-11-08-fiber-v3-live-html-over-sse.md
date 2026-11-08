---
slug: fiber-v3-live-html-over-sse
title: "Live HTML Over SSE: Pushing Rendered Fragments With app.Render in Fiber v3.6"
authors: [fiber-team]
tags: [fiber, v3, sse, htmx, templates, streaming, go]
description: "Since v3.6.0, app.Render writes a template to any io.Writer, so a Fiber app can render an update once and push the same HTML to every open browser over SSE. A live support queue with htmx, replay after reconnects, a reset for clients that fell too far behind, and the details that broke on the way."
---

A support team works from a shared queue page. Every agent has it open all
day, and the page polls the server every five seconds. Two things go wrong
with that. The queue is never quite current, so two agents regularly click
"Claim" on the same ticket within the same five seconds, and one of them
finds out a few seconds later that their work was wasted. And the polling is
mostly empty: thirty open tabs ask the server 360 times a minute whether
anything happened, and the answer is nearly always no.

Server-Sent Events fix both. The server keeps one response open per tab and
writes to it when something changes. The question is what to write. Sending
JSON means a second rendering layer in the browser that has to produce the
same markup as your Go templates. Sending HTML means you render the fragment
on the server with the same template that renders the full page, and the
browser only has to put it in the right place. With htmx and its SSE
extension, that last part needs no JavaScript of your own.

Rendering a template used to be tied to a request in Fiber: `c.Render`
writes into the response of the request at hand. An update that one agent
triggers has to reach thirty other streams, and none of them is the request
that caused it. [Fiber v3.6.0](https://github.com/gofiber/fiber/releases/tag/v3.6.0)
added [`app.Render`](/api/app#render), which writes a template through the
configured view engine into any `io.Writer`, with no request involved. This
post builds the live queue around it: render each update once, number it,
fan it out to every subscriber, replay what a reconnecting browser missed and
send a full reset when replay is impossible. Everything was built and tested
against [Fiber v3.6.1](https://github.com/gofiber/fiber/releases/tag/v3.6.1)
with [html/v3.1.0](https://github.com/gofiber/template/releases/tag/html/v3.1.0)
of the template engine, htmx 2.0.11 and htmx-ext-sse 2.2.4. `app.Render` needs
Fiber v3.6.0 or later, which requires Go 1.26. The [SSE middleware](/middleware/sse)
has been there since v3.3.0.

<!-- truncate -->

## Render Where the Change Happens

The naive version of a live page renders inside the stream handler: every
stream waits for a signal, then loads the data and renders the fragment for
its own client. With thirty agents, one claimed ticket becomes thirty
identical template executions. It also gets the order wrong in subtle ways,
because each stream renders whatever state it finds when it gets around to
it, which may already include the next change.

The version in this post turns that around. The code that changes a ticket
also renders the fragment that shows it, once, and stores the result as an
update with a sequence number. Streams never render tickets. They copy bytes
from the update into their connection. That is the part `app.Render` makes
possible: the rendering happens in whatever goroutine changed the data, with
the app's engine and templates, and without a `fiber.Ctx` in sight.

Numbering the updates buys the second half of the design. Every SSE event can
carry an `id`, and the browser's `EventSource` remembers the last one it saw.
When the connection drops and the browser reconnects on its own, it sends that
id back in the `Last-Event-ID` header. If the server still has the updates
after that id, it replays them and the page is current again. If it does not,
because the id is too old or comes from a server process that no longer
exists, the stream starts with a `reset` event that carries the whole list.

## The Templates

The app uses the [html engine](/template/html/) with a layout. The layout
loads htmx and the SSE extension from `./public`. I copied both files out of
their npm packages (`htmx.org@2.0.11` and `htmx-ext-sse@2.2.4`) rather than
pulling them from a CDN, which keeps the example self-contained:

<!-- prettier-ignore -->
```html title="views/layouts/main.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Support queue</title>
  <script src="/public/htmx.min.js"></script>
  <script src="/public/sse.js"></script>
  <style>.empty:not(:only-child) { display: none; }</style>
</head>
<body>
  {{embed}}
</body>
</html>
```

The index page holds a name field for the agent, the form for new tickets and
the list. The interesting part is the block at the bottom:

<!-- prettier-ignore -->
```html title="views/index.html"
<h1>Support queue</h1>

<input id="agent" name="agent" placeholder="Your name">

<form hx-post="/tickets" hx-swap="none"
      hx-on::after-request="if (event.detail.successful) this.reset()">
  <input name="title" placeholder="What is broken?" required>
  <button>Open ticket</button>
</form>

<div hx-ext="sse" sse-connect="/events">
  <div hidden sse-swap="reset" hx-target="#tickets"
       hx-swap="innerHTML settle:0ms"></div>
  <ul id="tickets" sse-swap="ticket" hx-swap="afterbegin settle:0ms">
    {{template "partials/tickets" .}}
  </ul>
</div>
```

`hx-ext="sse"` turns on the extension and `sse-connect` opens one
`EventSource` for everything inside the `div`. Each element with `sse-swap`
listens for the events of that name and swaps the event's data into the page
with its own `hx-swap` rule. The list itself handles `ticket` events by
inserting the fragment at the top. The hidden `div` handles `reset` events by
replacing the content of the list, which it points at with `hx-target`. That
detour is needed because an element has one swap rule, and the list cannot be
both "insert at the top" and "replace everything". The extension resolves the
swap target the same way a normal htmx request does, so `hx-target` works on
an `sse-swap` element.

A single ticket is a partial, and the list is a partial that ranges over it:

<!-- prettier-ignore -->
```html title="views/partials/ticket.html"
<li id="ticket-{{.ID}}" sse-swap="ticket-{{.ID}}"
    hx-swap="outerHTML settle:0ms">
  <strong>#{{.ID}}</strong> {{.Title}}
  {{- if .Agent}}
  <em>claimed by {{.Agent}}</em>
  {{- else}}
  <button hx-post="/tickets/{{.ID}}/claim" hx-include="#agent"
          hx-swap="none">Claim</button>
  {{- end}}
</li>
```

<!-- prettier-ignore -->
```html title="views/partials/tickets.html"
{{range .Tickets -}}
{{template "partials/ticket" .}}
{{else -}}
<li class="empty">No open tickets.</li>
{{end -}}
```

Every rendered ticket listens for an event named after itself. When an agent
claims ticket 7, the server sends an event named `ticket-7`, and the `li` for
ticket 7 replaces itself with the new markup. htmx processes swapped-in
content, so a ticket that arrived through SSE registers its own listener just
like one that came with the page.

The `settle:0ms` on all three swaps is not decoration. htmx processes new
content, which is when a fresh `li` registers its `sse-swap` listener, only
after the settle delay, 20 milliseconds by default. Events that arrive
together, such as a replay or a ticket that is claimed right after it was
opened, fall into that gap: the claim event for ticket 1 arrives before the
`li` of ticket 1 listens for it, and nothing handles it. In a headless
Chromium test that opened four tickets and claimed each of them right away,
all four claims were lost with the default delay and all four arrived with
`settle:0ms`. Worse, the browser's last event id has already moved past the
lost claim, so the next reconnect does not bring it back either. With a settle
delay of zero, htmx processes the new content before the next event is
dispatched.

The `.empty` rule in the layout hides the
"No open tickets." placeholder as soon as a real ticket is inserted next to
it.

The engine is created with `.Option("missingkey=error")`, a method added in
html/v3.1.0 that passes options through to `html/template`. With it, a typo in
a `fiber.Map` key fails the render with an error instead of quietly printing
`<no value>` into a fragment that thirty browsers will then display. The option
only affects map lookups. A misspelled struct field was always an error.

## The Board

All state lives in one type. It holds the tickets, the recent updates and the
set of subscribed streams, under one mutex:

```go title="board.go"
package main

import (
    "bytes"
    "errors"
    "fmt"
    "io"
    "strconv"
    "strings"
    "sync"
    "time"
)

// Ticket is one entry in the support queue.
type Ticket struct {
    ID    int
    Title string
    Agent string
}

// update is one rendered SSE event, kept for fan-out and replay.
type update struct {
    seq  uint64
    name string
    html string
}

// renderFunc matches (*fiber.App).Render.
type renderFunc func(out io.Writer, name string, data any, layouts ...string) error

var (
    errNotFound = errors.New("ticket not found")
    errClaimed  = errors.New("ticket already claimed")
)

const (
    historySize    = 256 // updates kept for Last-Event-ID replay
    subscriberSize = 16  // updates a slow client may fall behind
)

// Board owns the tickets, the update history and the subscribers.
// One mutex guards all three, so a subscriber never misses an update
// between its snapshot and its first live event.
type Board struct {
    mu       sync.Mutex
    render   renderFunc
    boot     string
    seq      uint64
    nextID   int
    tickets  []Ticket // newest first
    history  []update // oldest first, at most historySize
    watchers map[chan update]struct{}
}

func NewBoard(render renderFunc) *Board {
    return &Board{
        render:   render,
        boot:     strconv.FormatInt(time.Now().UnixMilli(), 10),
        watchers: make(map[chan update]struct{}),
    }
}

// fragment renders a partial without a layout. The explicit "" matters:
// without it, app.Render wraps the partial in ViewsLayout.
func (b *Board) fragment(name string, data any) (string, error) {
    var buf bytes.Buffer
    if err := b.render(&buf, name, data, ""); err != nil {
        return "", err
    }
    return buf.String(), nil
}

// eventID turns a sequence number into an SSE id that is only valid
// for this process: after a restart, old ids no longer match.
func (b *Board) eventID(seq uint64) string {
    return b.boot + "-" + strconv.FormatUint(seq, 10)
}

func (b *Board) Snapshot() []Ticket {
    b.mu.Lock()
    defer b.mu.Unlock()
    return append([]Ticket(nil), b.tickets...)
}

func (b *Board) Open(title string) (Ticket, error) {
    b.mu.Lock()
    defer b.mu.Unlock()

    t := Ticket{ID: b.nextID + 1, Title: title}
    html, err := b.fragment("partials/ticket", t)
    if err != nil {
        return Ticket{}, err
    }
    b.nextID = t.ID
    b.tickets = append([]Ticket{t}, b.tickets...)
    b.publishLocked("ticket", html)
    return t, nil
}

func (b *Board) Claim(id int, agent string) (Ticket, error) {
    b.mu.Lock()
    defer b.mu.Unlock()

    for i := range b.tickets {
        if b.tickets[i].ID != id {
            continue
        }
        if b.tickets[i].Agent != "" {
            return b.tickets[i], errClaimed
        }
        t := b.tickets[i]
        t.Agent = agent
        html, err := b.fragment("partials/ticket", t)
        if err != nil {
            return Ticket{}, err
        }
        b.tickets[i] = t
        b.publishLocked(fmt.Sprintf("ticket-%d", id), html)
        return t, nil
    }
    return Ticket{}, errNotFound
}

// publishLocked records an update and hands it to every subscriber.
// A subscriber whose buffer is full is dropped instead of blocking
// everyone else; its browser reconnects and catches up by replay.
func (b *Board) publishLocked(name, html string) {
    b.seq++
    u := update{seq: b.seq, name: name, html: html}
    b.history = append(b.history, u)
    if len(b.history) > historySize {
        b.history = b.history[len(b.history)-historySize:]
    }
    for ch := range b.watchers {
        select {
        case ch <- u:
        default:
            delete(b.watchers, ch)
            close(ch)
        }
    }
}

// subscription is what a new stream starts from: either the updates it
// missed (replay) or, when that is not possible, a full snapshot.
type subscription struct {
    updates  chan update
    replay   []update
    snapshot []Ticket
    resync   bool
    cursor   uint64
}

func (b *Board) Subscribe(lastEventID string) *subscription {
    b.mu.Lock()
    defer b.mu.Unlock()

    sub := &subscription{updates: make(chan update, subscriberSize), cursor: b.seq}
    b.watchers[sub.updates] = struct{}{}

    if seq, ok := b.parseID(lastEventID); ok && b.canReplayLocked(seq) {
        for _, u := range b.history {
            if u.seq > seq {
                sub.replay = append(sub.replay, u)
            }
        }
        return sub
    }

    sub.resync = true
    sub.snapshot = append([]Ticket(nil), b.tickets...)
    return sub
}

func (b *Board) Unsubscribe(sub *subscription) {
    b.mu.Lock()
    defer b.mu.Unlock()
    if _, ok := b.watchers[sub.updates]; ok {
        delete(b.watchers, sub.updates)
        close(sub.updates)
    }
}

func (b *Board) parseID(id string) (uint64, bool) {
    boot, seq, ok := strings.Cut(id, "-")
    if !ok || boot != b.boot {
        return 0, false
    }
    n, err := strconv.ParseUint(seq, 10, 64)
    if err != nil || n > b.seq {
        return 0, false
    }
    return n, true
}

// canReplayLocked reports whether every update after seq is still in history.
func (b *Board) canReplayLocked(seq uint64) bool {
    if seq == b.seq {
        return true
    }
    return len(b.history) > 0 && b.history[0].seq <= seq+1
}
```

`Subscribe` registers the new channel and takes either the replay or the
snapshot in the same critical section in which `publishLocked` hands out
updates. So there is no window in which an update could be published after the
snapshot was taken but before the channel was registered, and no update can show
up both in the snapshot and on the channel. Without that, you need deduplication
on the client, and htmx has no idea that an `li` it is about to insert is
already on the page.

`fragment` passes an explicit empty layout to the render function. That looks
odd until you read what `app.Render` does with no layout argument: it applies
`ViewsLayout`, just like `c.Render`. Without the `""`, every SSE event would
contain a complete HTML document with `<head>` and script tags, and htmx would
insert all of it into the list. The html engine treats an empty layout name as
"no layout".

The event id is `<boot>-<seq>`, where `boot` is the process start time in Unix
milliseconds. A plain counter would restart at 1 after a deploy, and a browser
that reconnects with `Last-Event-ID: 57` would get a replay of whatever the new
process happened to number 58 and up, which is a different set of events. With
the boot prefix, an id from an earlier process does not parse, and the client
gets a reset. Two replicas started in the same millisecond would share a prefix,
which only matters once there is more than one process, and that setup needs a
shared sequence anyway (see the end of this post).

`publishLocked` never blocks. Each subscriber has a buffer of 16 updates, and
a stream that falls that far behind gets dropped by closing its channel. A
single slow reader rarely gets there, because writes go into the kernel's
socket buffer long before the network is the bottleneck. A burst does: a bulk
import that opens 50 tickets at once overflows every buffer and drops every
subscriber in the same moment. That is survivable because the replay exists.
Each stream ends, each browser reconnects with the id of the last event it
actually received and catches up from the history, but expect a wave of
reconnects after such a burst, and size the buffer for the bursts you know
about. The same can happen to a stream that starts with a long replay while
live updates keep arriving. It recovers the same way. The alternative, a
blocking send, would let the slowest client in the building hold the mutex and
with it every `Open` and `Claim` request.

A client that disappears without closing its connection stays subscribed until
a write to it fails. With nothing published, that write is the SSE
middleware's heartbeat comment, every 15 seconds by default, so a dead tab
holds its channel for at least that long.

## Routes and the Stream

```go title="main.go"
package main

import (
    "errors"
    "log"
    "strings"
    "unicode/utf8"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/sse"
    "github.com/gofiber/fiber/v3/middleware/static"
    "github.com/gofiber/template/html/v3"
)

func newApp() (*fiber.App, *Board) {
    engine := html.New("./views", ".html").Option("missingkey=error")

    app := fiber.New(fiber.Config{
        Views:       engine,
        ViewsLayout: "layouts/main",
    })
    board := NewBoard(app.Render)

    app.Use("/public", static.New("./public"))

    app.Get("/", func(c fiber.Ctx) error {
        return c.Render("index", fiber.Map{"Tickets": board.Snapshot()})
    })

    app.Post("/tickets", func(c fiber.Ctx) error {
        // FormValue points into a buffer Fiber reuses. The title outlives
        // this request, so it needs its own copy.
        title := strings.Clone(strings.TrimSpace(c.FormValue("title")))
        if title == "" || utf8.RuneCountInString(title) > 200 {
            return fiber.NewError(fiber.StatusUnprocessableEntity,
                "title must be 1 to 200 characters")
        }
        if _, err := board.Open(title); err != nil {
            return err
        }
        return c.SendStatus(fiber.StatusNoContent)
    })

    app.Post("/tickets/:id<int>/claim", func(c fiber.Ctx) error {
        agent := strings.Clone(strings.TrimSpace(c.FormValue("agent")))
        if agent == "" || utf8.RuneCountInString(agent) > 100 {
            return fiber.NewError(fiber.StatusUnprocessableEntity,
                "agent must be 1 to 100 characters")
        }
        id := fiber.Params[int](c, "id")
        _, err := board.Claim(id, agent)
        switch {
        case errors.Is(err, errNotFound):
            return fiber.ErrNotFound
        case errors.Is(err, errClaimed):
            return fiber.NewError(fiber.StatusConflict, err.Error())
        case err != nil:
            return err
        }
        return c.SendStatus(fiber.StatusNoContent)
    })

    app.Get("/events", sse.New(sse.Config{
        Handler: streamUpdates(app, board),
    }))

    return app, board
}

func streamUpdates(app *fiber.App, board *Board) sse.Handler {
    return func(_ fiber.Ctx, stream *sse.Stream) error {
        sub := board.Subscribe(stream.LastEventID())
        defer board.Unsubscribe(sub)

        if sub.resync {
            var buf strings.Builder
            data := fiber.Map{"Tickets": sub.snapshot}
            err := app.Render(&buf, "partials/tickets", data, "")
            if err != nil {
                return err
            }
            if err := stream.Event(sse.Event{
                ID:   board.eventID(sub.cursor),
                Name: "reset",
                Data: buf.String(),
            }); err != nil {
                return err
            }
        }

        for _, u := range sub.replay {
            if err := send(stream, board, u); err != nil {
                return err
            }
        }

        for {
            select {
            case <-stream.Done():
                return stream.Err()
            case u, ok := <-sub.updates:
                if !ok {
                    return nil // dropped as too slow; the browser reconnects
                }
                if err := send(stream, board, u); err != nil {
                    return err
                }
            }
        }
    }
}

func send(stream *sse.Stream, board *Board, u update) error {
    return stream.Event(sse.Event{
        ID:   board.eventID(u.seq),
        Name: u.name,
        Data: u.html,
    })
}

func main() {
    app, _ := newApp()
    log.Fatal(app.Listen(":3000"))
}
```

The stream handler ignores its `fiber.Ctx` on purpose. The SSE middleware
calls `c.Abandon()` and runs the handler inside `c.SendStreamWriter`, after
the request handler has returned. The [`app.Render`](/api/app#render)
documentation says it directly: capture the app, not the request context, when
you render from an asynchronous stream writer. `streamUpdates` gets the app as
a parameter, and the board got `app.Render` as its render function in
`newApp`.

The first thing a stream does is subscribe with the `Last-Event-ID` value that
`stream.LastEventID()` returns. A reset carries the id of the newest update
that the snapshot includes. That matters: an event without an `id` field does
not change the browser's last event id, and a client that was reset without
one would ask for a reset again on the next reconnect.

Multi-line data needs no special handling. A rendered fragment spans several
lines, and the SSE format ends a field at the line break. The middleware
splits `Data` into one `data:` line per line of text, and `EventSource` joins
them back together with line breaks. If you write events by hand with
`c.SendStreamWriter` and a `fmt.Fprintf(w, "data: %s\n\n", html)`, the SSE
parsing rules read every line after the first as a field the browser does not
know and ignore it, so the browser gets the first line of your fragment and
nothing else.

### Trying It

Start the app, open a stream with curl in one terminal, and create and claim
tickets in another:

```bash
curl -N localhost:3000/events

curl -X POST -d 'title=Checkout returns 500' localhost:3000/tickets
curl -X POST -d 'title=<img src=x onerror=alert(1)>' localhost:3000/tickets
curl -X POST -d 'agent=Mia' localhost:3000/tickets/1/claim
curl -X POST -d 'agent=Ben' localhost:3000/tickets/1/claim
# ticket already claimed  (409)
```

The stream shows the reset with the empty list, then one event per change:

```text
id: 1794141181250-0
event: reset
data: <li class="empty">No open tickets.</li>
data:

id: 1794141181250-1
event: ticket
data: <li id="ticket-1" sse-swap="ticket-1"
data:     hx-swap="outerHTML settle:0ms">
data:   <strong>#1</strong> Checkout returns 500
data:   <button hx-post="/tickets/1/claim" hx-include="#agent"
data:           hx-swap="none">Claim</button>
data: </li>
data:

id: 1794141181250-2
event: ticket
data: <li id="ticket-2" sse-swap="ticket-2"
data:     hx-swap="outerHTML settle:0ms">
data:   <strong>#2</strong> &lt;img src=x onerror=alert(1)&gt;
data:   <button hx-post="/tickets/2/claim" hx-include="#agent"
data:           hx-swap="none">Claim</button>
data: </li>
data:

id: 1794141181250-3
event: ticket-1
data: <li id="ticket-1" sse-swap="ticket-1"
data:     hx-swap="outerHTML settle:0ms">
data:   <strong>#1</strong> Checkout returns 500
data:   <em>claimed by Mia</em>
data: </li>
data:
```

Each event ends with an empty `data:` line because the template files end
with a line break, which is harmless. The title with the image tag arrives
escaped. `html/template` escapes the fragment when it renders, and since every
client receives exactly those bytes, it is escaped once for all of them. The
flip side: if someone ever passes a title as `template.HTML` to get some
formatting through, a single ticket can run script in every agent's browser at
once.

Reconnecting with the id of the second event replays only what came after it:

```bash
curl -N -H 'Last-Event-ID: 1794141181250-2' localhost:3000/events
```

```text
id: 1794141181250-3
event: ticket-1
data: <li id="ticket-1" sse-swap="ticket-1"
data:     hx-swap="outerHTML settle:0ms">
data:   <strong>#1</strong> Checkout returns 500
data:   <em>claimed by Mia</em>
data: </li>
data:
```

An id from another process, `Last-Event-ID: 0-2` for example, gets a `reset`
event with both tickets and the id `1794141181250-3`. Your boot prefix will
differ, since it is the start time of your process in Unix milliseconds.

In the browser, with two windows open, a ticket created in one shows up at the
top of the other, and a claim replaces the button with "claimed by" in both.

## Two Ways a Browser Reconnects

The replay design rests on the browser sending `Last-Event-ID`, so I checked
when it does. I ran the app with two debug switches, one that dropped every
subscriber and one that made `/events` answer `503`, drove it with a headless
Chromium and logged the header on the server.

When the server simply ends the stream, which is what happens to a dropped
slow client, the browser's `EventSource` reconnects on its own after a few
seconds and sends the id of the last event it received. The server log showed
`Last-Event-ID="<boot>-1"`, the replay delivered the ticket that had been created
in between, and the page was complete. The same happened after I killed the
server process and started a new one: the browser kept retrying while the port
was closed, reconnected with the old id, and, because the boot prefix no longer
matched, received a reset with the new, empty state.

When the reconnect gets an error response instead, such as a `503` from a
server that is starting up or a `502` from a proxy in front of it, the
`EventSource` gives up for good and its `readyState` becomes `CLOSED`. The htmx
extension notices that and opens a brand new `EventSource` with exponential
backoff, starting at half a second. A new `EventSource` has no last event id,
and the log showed the next stream starting with an empty `Last-Event-ID`.
In that case, the reset is what brings the page back. If you build this
without a reset path, an outage that answers with errors loses every update
that happened during it, and the page looks current while it is not.

A fresh page load is the same case: the first stream has no id and starts
with a reset. That costs one extra render of the list per page view, and I
think it is worth it, because it closes the gap between the server rendering
the page and the browser opening the stream. Anything that changed in between
is in the reset.

## Details That Bite

### Request Values Do Not Outlive the Request

The first version of this app stored `c.FormValue("title")` in the ticket
directly. The event for a new ticket always looked fine, because it was
rendered while the request was still running. Fragments rendered later from
the stored ticket did not. In one run I created "Checkout returns 500", then
"Password reset mail never arrives", then claimed the first ticket, and the
list showed this for ticket 1:

```text
<strong>#1</strong> Password reset mail
```

The string returned by `FormValue` points into a buffer that Fiber reuses for
later requests, and the second request wrote its title over the first. Other
runs with the same steps produced other fragments of later request bodies, and
some produced the correct title, which is what makes this bug so unpleasant to
track down. It is Fiber's [zero allocation](/#zero-allocation) rule, and live
pages run into it more than most code because their whole point is keeping
data from one request and showing it in others. `strings.Clone` in both
handlers fixes it. The alternative is [`Immutable: true`](/api/fiber#immutable)
in the config, which copies every value at some cost per request.

### No Locals, No ViewBind

`c.Render` adds a few things to a `fiber.Map` before it renders: values set
with [`c.ViewBind`](/api/ctx#viewbind), and the request's locals when
[`PassLocalsToViews`](/api/fiber#passlocalstoviews) is on. `app.Render` has no
request, so it adds neither. If your ticket partial reads the current user or a
CSRF token from those, it renders differently, or with `missingkey=error` not
at all, through `app.Render`. Partials that are rendered once for everybody
should not contain anything per user anyway. A "Claim" button that is only
visible to some agents does not belong in a broadcast fragment. Send a neutral
fragment and let a per-user request fill in the rest.

A related difference: `c.Render` picks the view engine of a mounted sub-app
when the request path falls under its mount point. `app.Render` uses the
engine of the app you call it on, so call it on the app that owns the
templates.

### Event Names Have to Match Exactly

`sse-swap` takes a comma-separated list of event names and has no wildcard.
An event the server names `ticket` will not reach an element that listens for
`tickets`, and nothing complains: the extension just never calls the listener.
An event without a name arrives as `message`. When a fragment does not show
up, compare the `event:` line in curl with the attribute before you debug
anything else.

### Rendering Happens Under the Lock

`Open` and `Claim` render while they hold the board mutex. That keeps the update
order and the sequence numbers in agreement. The ticket partial took about 7
microseconds per render in a `go test -bench` run on a 4-core 2.1 GHz Xeon VM,
so the lock is not held long. A large template or a slow template function would
serialize every write to the board behind it. If that ever shows up in a
profile, render outside the lock from a copy of the ticket and recheck a version
number before you publish, but I would not start there.

### Six Connections per Host on HTTP/1.1

Browsers limit HTTP/1.1 to six open connections per host, and every
`EventSource` keeps one of them busy for as long as the page is open.
[MDN's EventSource page](https://developer.mozilla.org/Web/API/EventSource)
notes that Chrome and Firefox will not change this. The limit counts across
all tabs of the browser. With six queue tabs open, every connection to the
host is taken by a stream, so a seventh tab never connects and the "Claim"
and "Open ticket" posts from the open tabs wait for a free connection. That
is the stuck button this post set out to remove. Over HTTP/2 the limit is
the number of concurrent streams, usually 100. Fiber speaks HTTP/1.1, so put a
proxy that terminates HTTP/2 in front of it if your users keep many tabs open.

## Testing Without a Browser

`app.Render` also makes fragments easy to test, since there is no request to
fake. These tests pin down what the design depends on: no layout in
fragments, replay after a known id and a reset after an unknown one, and
dropping instead of blocking a slow subscriber:

```go title="board_test.go"
package main

import (
    "bytes"
    "strings"
    "testing"
)

func TestFragmentSkipsLayout(t *testing.T) {
    app, board := newApp()

    var page bytes.Buffer
    ticket := Ticket{ID: 1, Title: "x"}
    if err := app.Render(&page, "partials/ticket", ticket); err != nil {
        t.Fatal(err)
    }
    if !strings.Contains(page.String(), "<!DOCTYPE html>") {
        t.Fatal("expected app.Render without a layout argument to apply ViewsLayout")
    }

    html, err := board.fragment("partials/ticket", ticket)
    if err != nil {
        t.Fatal(err)
    }
    if strings.Contains(html, "<!DOCTYPE html>") {
        t.Fatalf("fragment contains the layout:\n%s", html)
    }
}

func TestSubscribeReplaysMissedUpdates(t *testing.T) {
    _, board := newApp()

    first := board.Subscribe("")
    board.Unsubscribe(first)
    if !first.resync {
        t.Fatal("a stream without Last-Event-ID must start with a reset")
    }

    for _, title := range []string{"one", "two", "three"} {
        if _, err := board.Open(title); err != nil {
            t.Fatal(err)
        }
    }

    sub := board.Subscribe(board.eventID(1))
    defer board.Unsubscribe(sub)
    if sub.resync || len(sub.replay) != 2 || sub.replay[0].seq != 2 {
        t.Fatalf("want replay of updates 2 and 3, got resync=%v replay=%v",
            sub.resync, sub.replay)
    }

    stale := board.Subscribe("0-1")
    defer board.Unsubscribe(stale)
    if !stale.resync || len(stale.snapshot) != 3 {
        t.Fatalf("an id from another process must resync, got %+v", stale)
    }
}

func TestSlowSubscriberIsDropped(t *testing.T) {
    _, board := newApp()
    sub := board.Subscribe("")

    for i := 0; i <= subscriberSize; i++ {
        if _, err := board.Open("ticket"); err != nil {
            t.Fatal(err)
        }
    }

    n := 0
    for range sub.updates { // ends because the board closed the channel
        n++
    }
    if n != subscriberSize {
        t.Fatalf("want %d buffered updates before the drop, got %d",
            subscriberSize, n)
    }
    board.Unsubscribe(sub) // safe after a drop
}
```

The first test is the one I would keep even in a codebase that never touches
SSE. It documents that `app.Render` without a layout argument wraps the
partial in `ViewsLayout`, and the next person who removes the `""` because it
looks redundant finds out from a failing test instead of from a broken page.
Run them with `go test -race`, since everything interesting in the board
happens across goroutines.

## Before It Goes to Production

The example leaves out a few things on purpose to stay readable, and each of
them matters on a real queue. The two `POST` routes change state and need
CSRF protection like any other form; [CSRF Without Tokens](/blog/fiber-v3-csrf-without-tokens)
shows the header-based check that fits an htmx app well. `/events` sends every
ticket to whoever connects, so it needs the same authentication as the page,
and probably a cap on streams per user.

A lost race on "Claim" answers `409`, and with `hx-swap="none"` the agent who
lost gets no message. The SSE update showing the other name usually arrives
at the same moment, but an explicit message is kinder. htmx does not swap
error responses by default, so that takes an `hx-on::after-request` handler
or an entry for `409` in htmx's `responseHandling` configuration. The form uses
`event.detail.successful` for the same reason: without it, a rejected title
would clear the field the agent just typed.

A proxy in front of the app must not buffer `/events`, and its read timeout
has to be longer than the heartbeat interval. The middleware sets
`X-Accel-Buffering: no`, which covers nginx's buffering. I also ran the stream
behind Fiber's own compress middleware, and events still arrived as they
were written, since each one is flushed.

One detail of the htmx extension: the listener of a ticket element that was
replaced, by a claim or by a reset, stays registered on the `EventSource` until
an event with its name arrives, at which point the extension notices that the
element is gone and removes it. A claim happens only once per ticket, so for
claimed tickets that event never comes, and on a page that stays open all day
the leftovers add up slowly.
At the size of a support queue that is unlikely to matter, but a page with
thousands of per-row event names would be better served by a single event name
and out-of-band swaps.

## When This Is the Wrong Tool

The board lives in one process. With [prefork](/blog/fiber-v3-prefork-mode)
or more than one replica, each process has its own tickets, history and
subscribers, and a claim handled by one process never reaches browsers
connected to another. In a real deployment the tickets live in a database, and
the processes share updates through a broker such as Redis pub/sub or Postgres
`LISTEN`/`NOTIFY`. The rendering and the stream handling stay as they are, but
the sequence number has to come from the shared side, otherwise replay across
processes is meaningless.

SSE only goes from server to client. For the queue that is fine, because the
writes are ordinary form posts. A collaborative editor that sends a stream of
small changes in both directions is better served by a WebSocket. And if the
data changes many times a second, such as a price ticker, pushing a rendered
fragment for every change wastes bandwidth on markup that the next update
replaces anyway. Send the numbers then, or batch the changes and render one
fragment per interval.

Long-lived streams also interact with graceful shutdown. A stream does not end
because the server wants to stop, so `ShutdownWithTimeout` will wait for it.
[Nobody Cancels Your Handler](/blog/fiber-v3-cancellation-timeouts-disconnects)
shows how to pass a shutdown context into the stream handler, and with the
replay in place, a stream cut off during a deploy costs the client nothing but
the reconnect.

## Wrapping Up

`app.Render` takes rendering out of the request, which is what a live page
needs: render each change once where it happens, number it, and let every
stream copy the same bytes. Pass `""` as the layout so `ViewsLayout` stays out
of your fragments, clone every request value you keep, replay from
`Last-Event-ID` when you can and send a full reset when you cannot, because
the browser does not always send the header.

## Internal References

- [App: Render](/api/app#render) and [Ctx: Render](/api/ctx#render)
- [SSE Middleware](/middleware/sse)
- [Fiber config: ViewsLayout](/api/fiber#viewslayout),
  [PassLocalsToViews](/api/fiber#passlocalstoviews) and
  [Immutable](/api/fiber#immutable)
- [Zero Allocation](/#zero-allocation)
- [HTML template engine](/template/html/)
- [Fiber + HTMX: Interactive Apps Without the Build Step](/blog/fiber-v3-htmx)
- [Nobody Cancels Your Handler](/blog/fiber-v3-cancellation-timeouts-disconnects)
- [Fiber v3.6.0 release (app.Render, Go 1.26)](https://github.com/gofiber/fiber/releases/tag/v3.6.0)
- [Fiber v3.6.1 release](https://github.com/gofiber/fiber/releases/tag/v3.6.1)
- [Render configured templates to a writer (#4594)](https://github.com/gofiber/fiber/pull/4594)
- [template html/v3.1.0 release (Option)](https://github.com/gofiber/template/releases/tag/html/v3.1.0)
- [htmx SSE extension](https://htmx.org/extensions/sse)
- [MDN: EventSource](https://developer.mozilla.org/Web/API/EventSource)
