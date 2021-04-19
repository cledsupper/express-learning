import express from "express"

const app = express()

/**
 * GET - BUSCAR
 * POST  - CRIAR
 * PUT - ALTERAR
 * DELETE - REMOVER
 * SET - ALTERAR UMA INFORMAÇÃO
 */

app.get("/", (request, response) => {
    response.json({
        message: "Olá Mundo!"
    })
})

app.post("/users", (request, response) => {
    response.json({
        message: "Usuário salvo com sucesso!"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"))