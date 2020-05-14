const express = require('express')
const app = express()

app.use(express.json())


const persons = [
    {
        name: "Arto Helias",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-521235431",
        id: 4
    },
    {
        name: "Dan Abramov",
        number: "12-43-1543198",
        id: 3
    },
    {
        name: "Mary Popendick",
        number: "39-23-9078642",
        id: 6
    }
]


app.get('/api/persons', (request, response) => {
    return response.json(persons)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
