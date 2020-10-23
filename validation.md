# 🔎 Validation

## Validator package

Fiber can make _great_ use of the validator package to ensure correct validation of data to store.

* [Official valitador github page \(Installation, use, examples..\).](https://github.com/go-playground/validator)

You can find the detailed descriptions of the _validations_ used in the fields contained on the structs below:

* [Detailed docs](https://pkg.go.dev/github.com/go-playground/validator?tab=doc)

{% code title="Validation Example" %}
```go
type Job struct{
    Type          string `validate:"required,min=3,max=32"`
    Salary        int    `validate:"required,number"`
}

type User struct{
    Name          string  `validate:"required,min=3,max=32"`
    IsActive      bool    `validate:"required,eq=True|eq=False"`
    Email         string  `validate:"required,email,min=6,max=32"`
    Job           Job     `validate:"dive"`
}

type ErrorResponse struct {
    FailedField string
    Tag         string
    Value       string
}

func ValidateStruct(user User) []*ErrorResponse {
    var errors []*ErrorResponse
    validate = validator.New()
    err := validate.Struct(user)
    if err != nil {
        for _, err := range err.(validator.ValidationErrors) {
            var element ErrorResponse
            element.FailedField = err.StructNamespace()
            element.Tag = err.Tag()
            element.Value = err.Param()
            errors = append(errors, &element)
        }
    }
    return errors
}

func AddUser(c *fiber.Ctx) {
    //Connect to database
    user := new(User)
    if err := c.BodyParser(user); err != nil {
        errors := ValidateStruct()
    if errors != nil {
        c.JSON(errors)
        return
    }
    }
    //Do something else here

  //Return user
    c.JSON(user)
}

// Running a test with the following curl commands

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"isactive\":\"True\"}" http://localhost:8080/register/user

// Results in 

// [{"FailedField":"User.Email","Tag":"required","Value":""},{"FailedField":"User.Job.Salary","Tag":"required","Value":""},{"FailedField":"User.Job.Type","Tag":"required","Value":""}]⏎
```
{% endcode %}

