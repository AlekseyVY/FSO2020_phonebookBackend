const express = require('express')
const app = express()

app.use(express.json())

const generateId = () => {
    const rndId =  Math.floor(Math.random() * 1000000)
    return rndId
}

const findName = (name) => {
    const filterName = persons.find(person => person.name === name)
    return !(filterName);
}

let persons = [
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

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person) {
        return response.json(person)
    } else {
        return response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    return (response.send(
        `<h1>phonebook has info for ${persons.length} people</h1>`
            + `<h2>${Date()}</h2>`)
    )
})

app.post('/api/persons/', (request, response) => {
    const body = request.body
    console.log(body)

    if(!body.name || !body.number){
        return response.status(400).json({error: 'content missing'})
    }
    if(findName(body.name)){
        return response.status(400).json({error: 'name must be unique'})
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }
    persons = persons.concat(person)

    response.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    return response.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
