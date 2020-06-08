- - -
description: > Lista de preguntas más frecuentes. Siéntete libre de abrir un informe de problema para añadir tu pregunta en esta página.
- - -

# 🤔 FAQ

## ¿Cómo debo estructurar mi aplicación?

No hay una respuesta definitiva a esta pregunta. La respuesta depende de la escala de su solicitud y del equipo involucrado. Para ser lo más flexible posible, Fiber no hace suposiciones en términos de estructura.

Las rutas y otras lógicas específicas de la aplicación pueden repartirse por tantos ficheros como desee, y en cualquier estructura de directorios. Mira los siguientes ejemplos para inspirarte:

* [gofiber/boilerplate](https://github.com/gofiber/boilerplate)
* [thomasvvugt/fiber-boilerplate](https://github.com/thomasvvugt/fiber-boilerplate)
* [Youtube - Construyendo una API REST con Gorm y Fiber](https://www.youtube.com/watch?v=Iq2qT0fRhAA)

## ¿Cómo puedo manejar respuestas 404 personalizadas?

En Fiber, las respuestas 404 no son el resultado de un error, por lo que el gestor de errores no las capturará. Esto se debe a que una respuesta 404 simplemente indica que no hay ningún trabajo adicional que realizar, ya que Fiber no ha encontrado rutas que coincidan con la petición.

Todo lo que necesitas es añadir una función de middleware en la parte inferior de la pila, es decir, debajo del resto de las funciones, para manejar una respuesta 404:

{% code title="Example" %}
```go
app.Use(func(c *fiber.Ctx) {
    c.Status(fiber.StatusNotFound).SendString("¡Recurso no encontrado!")
})
```
{% endcode %}

## ¿Cómo configuro un gestor de errores?

Para sobreescribir el manejador de errores predeterminado debes proporcionar un manejador personalizado para la `aplicación.Settings.ErrorHandler`

{% code title="Example" %}
```go
app.Settings.ErrorHandler = func(c *fiber.Ctx, err error) {
    c.Status(500).SendString(err.Error())
}
```
{% endcode %}

Tenemos una página dedicada explicando cómo funciona el manejo de errores en Fiber, consulta [Manejo de errores](error-handling.md).

## ¿Qué motores de plantillas soporta Fiber?

Actualmente Fiber soporta ocho motores en nuestro middleware [gofiber/template](https://github.com/gofiber/template):

* [Ace](https://github.com/yosssi/ace)
* [Amber](https://github.com/eknkc/amber)
* [Django](https://github.com/flosch/pongo2)
* [Handlebars](https://github.com/aymerick/raymond)
* [HTML](https://golang.org/pkg/html/template/)
* [Jet](https://github.com/CloudyKit/jet)
* [Mustache](https://github.com/cbroglie/mustache)
* [Pug](https://github.com/Joker/jade)

Para saber más sobre el uso de plantillas en fibra, consulta [Plantillas](templates.md).

## ¿Tiene Fiber un chat para su comunidad?

Sí, tenemos nuestro propio servidor [Discord](https://gofiber.io/discord) donde pasamos el rato. Disponemos de diferentes salas para todos los temas.  
Únete a nosotros, a través de esta **&gt;** [**invitación**](https://gofiber.io/discord) **&lt;**., si tienes dudas o sencillamente quieres charlar sobre el tema.

![](.gitbook/assets/2020-06-08-03_06_27-support-discord.png)

