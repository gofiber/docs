import React from 'react';

export type FeatureItem = {
  title?: string;
  description?: React.ReactNode;
  code?: string;
  right?: React.ReactNode;
  layout?: 'split' | 'full' | 'pair';           // ← neu
  columns?: { title: string; description: React.ReactNode }[]; // ← neu
};

export const features: FeatureItem[] = [
  {
    title: 'Robust Routing',
    description: (
      <>
        Setting up routes for your application has never been so easy! The Express-like route definitions are easy to understand and work with.
      </>
    ),
    code: `app.Get("/", func (c *fiber.Ctx) error {
    return c.SendString("GET request")
})

app.Get("/:param", func (c *fiber.Ctx) error {
    return c.SendString("param: " + c.Params("param"))
})

app.Post("/", func (c *fiber.Ctx) error {
    return c.SendString("POST request")
})`,
  },
  {
    title: 'Serve Static Files',
    description: (
      <>
        Serve your static HTML, CSS, and JavaScript files with ease by defining static routes. You can also serve the contents of multiple directories on the same route!
      </>
    ),
    code: `app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css

// serve from multiple directories
app.Static("/", "./files")`,
  },
  {
    title: 'Extreme Performance',
    layout: 'full',
    description: (
      <>
        <div>
          Since Fiber is built on top of Fasthttp, your apps will enjoy unmatching performance! Don't believe us? Here's a benchmark that proves how Fiber shines compared to other frameworks:
        </div>
        <img
          src="/img/benchmark-pipeline.png"
          alt="Benchmark graph"
        />
      </>
    ),
  },
  {
    title: 'API-ready',
    description: (
      <>
        Are you building an API server? We've got you covered! Fiber is the perfect choice for building REST APIs in Go. Receiving and sending data is fast and easy!
      </>
    ),
    code: `app.Get("/api/posts", func (c *fiber.Ctx) error {
    posts := getPosts() // your logic
    if len(posts) == 0 {
        return c.Status(404).JSON(&fiber.Map{
            "success": false,
            "error":   "There are no posts!",
        })
    }
    return c.JSON(&fiber.Map{
        "success": true,
        "posts":   posts,
    })
})`,
  },
  {
    title: 'Flexible Middleware Support',
    description: (
      <>
        Choose from <a href="https://docs.gofiber.io/category/-middleware" target="_blank" rel="noreferrer">a number of already existing middleware</a> or create your own! Use them to verify and manipulate certain requests in your app before they reach your controller.
      </>
    ),
    code: `package main

import "github.com/gofiber/fiber/v2"

func main() {
  app := fiber.New()
  app.Static("/", "./public")
  // app.Static("/", "./public", fiber.Static{Browse: true})
  app.Listen(":3000")
}`,
  },
  {
    layout: 'pair',
    columns: [
      {
        title: 'Low Memory Footprint',
        description: (
          <>
            Fiber's low memory footprint allows you to implement features without worrying too much about how much memory your application will use. This allows you to focus on your application and its business logic, rather than technical particularities.
          </>
        ),
      },
      {
        title: 'Rapid Programming',
        description: (
          <>
            Take your idea and turn it into reality in no time! Thanks to the well-designed and easy-to-learn API, you can develop your application in record speed (especially if you're coming from an Express.js background).
          </>
        ),
      },
    ],
  },
  {
    title: 'Template Engines',
    description: (
      <>
        Want to use a different template engine in your Fiber app? Fear no more! Fiber supports multiple template engines, such as Handlebars and Pug, thanks to the <a href="https://github.com/gofiber/template" target="_blank" rel="noreferrer">template middleware</a>.
      </>
    ),
    code: `package main

import (
    "log"

    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/template/html"
)

func main() {
    app := fiber.New(fiber.Config{
        Views: html.New("./views", ".html"),
    })

    app.Get("/", func(c *fiber.Ctx) error {
      return c.Render("index", fiber.Map{
         "Title": "Hello, World!",
      })
    })

    log.Fatal(app.Listen(":3000"))
}`,
  },
  {
    title: 'WebSocket Support',
    description: (
      <>
        Use the power of <b>WebSockets</b> in your Fiber app! Build fast interactive user experiences with performance and scalability guaranteed.
      </>
    ),
    code: `app.Get("/ws", websocket.New(func(c *websocket.Conn) {
  // Websocket logic
  for {
    mtype, msg, err := c.ReadMessage()
    if err != nil {
      break
    }
    log.Printf("Read: %s", msg)

    err = c.WriteMessage(mtype, msg)
    if err != nil {
      break
    }
  }
  log.Println("Error:", err)
}))`,
  },
  {
    title: 'Rate Limiter',
    description: (
      <>
        With Fiber, limiting repeated requests to public APIs and endpoints is very simple. No more abusive requests!
      </>
    ),
    code: `package main

import (
    "log"
    "time"

    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/limiter"
)

func main() {
  app := fiber.New()

  // 3 requests per 10 seconds max
  app.Use(limiter.New(limiter.Config{
      Expiration: 10 * time.Second,
      Max:        3,
  }))

  // ...

  log.Fatal(app.Listen(":3000"))
}`,
  },

];
