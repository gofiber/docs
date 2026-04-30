---
slug: fiber-v3-file-uploads
title: File Uploads
authors: [fiber-team]
tags: [fiber, v3, file-upload, multipart, streaming, go]
description: "The parts every tutorial skips  -  size limits, type validation, path traversal prevention, and the storage patterns that keep your server alive."
---

The typical file upload tutorial is five lines: parse the form, get the file, save it to disk. It works for a homework assignment. It fails the moment someone uploads a 2GB file, or a `.exe` renamed to `.jpg`, or a thousand files simultaneously.

Production file handling needs three things the tutorials skip: size limits that protect your server, type validation that goes beyond the extension, and storage patterns that do not block your event loop.

<!-- truncate -->

## Single File Upload

The basic pattern is straightforward. Fiber parses multipart forms and gives you a `*multipart.FileHeader`:

```go
app.Post("/upload", func(c fiber.Ctx) error {
    file, err := c.FormFile("document")
    if err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "No file uploaded")
    }

    // Save to disk
    err = c.SaveFile(file, fmt.Sprintf("./uploads/%s", file.Filename))
    if err != nil {
        return fiber.NewError(fiber.StatusInternalServerError, "Failed to save file")
    }

    return c.JSON(fiber.Map{
        "filename": file.Filename,
        "size":     file.Size,
    })
})
```

This works but has problems. The filename comes from the client  -  it could contain path traversal characters like `../`. The file could be any size. The file could be anything, not just a document.

## Never Trust the Filename

The first rule of file uploads: never use the client's filename directly. A malicious client can send a filename like `../../etc/passwd` or `../../../app/config.yaml`.

Generate your own filenames. This example uses `github.com/google/uuid` - install it with `go get github.com/google/uuid`:

```go
import (
    "fmt"
    "path/filepath"

    "github.com/gofiber/fiber/v3"
    "github.com/google/uuid"
)

app.Post("/upload", func(c fiber.Ctx) error {
    file, err := c.FormFile("avatar")
    if err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "No file uploaded")
    }

    // Generate a safe filename
    ext := filepath.Ext(file.Filename)
    safeName := fmt.Sprintf("%s%s", uuid.New().String(), ext)
    savePath := filepath.Join("./uploads", safeName)

    if err := c.SaveFile(file, savePath); err != nil {
        return err
    }

    return c.JSON(fiber.Map{"path": safeName})
})
```

## Setting Body Limits

By default, Fiber (via fasthttp) allows request bodies up to 4MB. For file uploads, you probably want to change this:

```go
app := fiber.New(fiber.Config{
    BodyLimit: 50 * 1024 * 1024, // 50MB
})
```

When a client sends a body larger than this limit, Fiber returns `413 Request Entity Too Large` automatically. No parsing, no disk usage, no memory allocation for the oversized body.

For different limits on different routes, use the `limiter` approach:

```go
// Small limit for API routes
api := app.Group("/api")
api.Use(func(c fiber.Ctx) error {
    if c.Request().Header.ContentLength() > 1*1024*1024 {
        return fiber.ErrRequestEntityTooLarge
    }
    return c.Next()
})

// Larger limit for upload routes
app.Post("/upload", uploadHandler)
```

## Validating File Types

The file extension means nothing  -  anyone can rename a file. Check the actual content by reading the first bytes and detecting the MIME type:

```go
import "net/http"

func validateFileType(file *multipart.FileHeader, allowed []string) error {
    f, err := file.Open()
    if err != nil {
        return err
    }
    defer f.Close()

    // Read the first 512 bytes for MIME detection
    buf := make([]byte, 512)
    n, err := f.Read(buf)
    if err != nil {
        return err
    }

    mimeType := http.DetectContentType(buf[:n])

    for _, a := range allowed {
        if mimeType == a {
            return nil
        }
    }

    return fmt.Errorf("file type %s is not allowed", mimeType)
}
```

Use it in your handler:

```go
app.Post("/avatar", func(c fiber.Ctx) error {
    file, err := c.FormFile("avatar")
    if err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "No file uploaded")
    }

    // Only allow images
    allowed := []string{"image/jpeg", "image/png", "image/webp"}
    if err := validateFileType(file, allowed); err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "Only JPEG, PNG, and WebP images are allowed")
    }

    safeName := fmt.Sprintf("%s%s", uuid.New().String(), filepath.Ext(file.Filename))
    return c.SaveFile(file, filepath.Join("./uploads", safeName))
})
```

`http.DetectContentType` uses the first 512 bytes of the file to determine the MIME type based on the file's magic bytes. It is not foolproof  -  a determined attacker can craft files that pass detection  -  but it blocks casual misuse and accidental uploads of wrong file types.

## Multiple File Uploads

Fiber handles multiple files from the same form field:

```go
app.Post("/gallery", func(c fiber.Ctx) error {
    form, err := c.MultipartForm()
    if err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "Invalid form data")
    }

    files := form.File["photos"]
    if len(files) == 0 {
        return fiber.NewError(fiber.StatusBadRequest, "No photos uploaded")
    }

    if len(files) > 10 {
        return fiber.NewError(fiber.StatusBadRequest, "Maximum 10 photos allowed")
    }

    var saved []string
    for _, file := range files {
        safeName := fmt.Sprintf("%s%s", uuid.New().String(), filepath.Ext(file.Filename))
        savePath := filepath.Join("./uploads/gallery", safeName)

        if err := c.SaveFile(file, savePath); err != nil {
            return err
        }
        saved = append(saved, safeName)
    }

    return c.JSON(fiber.Map{
        "uploaded": len(saved),
        "files":    saved,
    })
})
```

Always limit the number of files. Without a count limit, a client could send thousands of files in a single request and exhaust your disk I/O.

## Mixed File and Data Uploads

Often you need metadata alongside the file  -  a title, description, or category:

```go
type DocumentUpload struct {
    Title    string `form:"title"`
    Category string `form:"category"`
}

app.Post("/documents", func(c fiber.Ctx) error {
    var meta DocumentUpload
    if err := c.Bind().Body(&meta); err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "Invalid form data")
    }

    file, err := c.FormFile("file")
    if err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "No file uploaded")
    }

    safeName := fmt.Sprintf("%s%s", uuid.New().String(), filepath.Ext(file.Filename))
    if err := c.SaveFile(file, filepath.Join("./uploads", safeName)); err != nil {
        return err
    }

    return c.JSON(fiber.Map{
        "title":    meta.Title,
        "category": meta.Category,
        "file":     safeName,
        "size":     file.Size,
    })
})
```

The client sends a `multipart/form-data` request with both form fields and file parts. Fiber's binding handles the form fields, and `FormFile` handles the file.

## Cleaning Up on Error

If saving to database fails after the file is written to disk, you have an orphaned file. Clean up explicitly:

```go
app.Post("/upload", func(c fiber.Ctx) error {
    file, err := c.FormFile("file")
    if err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "No file uploaded")
    }

    safeName := fmt.Sprintf("%s%s", uuid.New().String(), filepath.Ext(file.Filename))
    savePath := filepath.Join("./uploads", safeName)

    if err := c.SaveFile(file, savePath); err != nil {
        return err
    }

    // Try to save metadata to database
    if err := db.SaveFileRecord(safeName, file.Size); err != nil {
        // Clean up the file we just saved
        os.Remove(savePath)
        return err
    }

    return c.JSON(fiber.Map{"file": safeName})
})
```

This pattern prevents disk space from filling up with files that have no database record pointing to them.

## Where to Start

If your current upload handler uses the client filename directly, fix that first  -  it is a path traversal vulnerability. Then add body limits and file type validation. These three changes cover the most common attack vectors and the most common production incidents.

## Internal References

- [Ctx FormFile](/api/ctx#formfile)
- [Ctx MultipartForm](/api/ctx#multipartform)
- [Ctx SaveFile](/api/ctx#savefile)
- [Bind](/api/bind)
