const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')



morgan.token('body', function getBody(request) {
    return JSON.stringify(request.body)
})


app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())



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

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name || !body.number){
        return response.status(400).json({error: 'content missing'})
    }/*
    if(findName(body.name)){
        return response.status(400).json({error: 'name must be unique'})
    }*/

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }
    persons = persons.concat(person)

    response.json(person)
})

app.put('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const body = request.body
    persons.map(person => {
        if(person.id === id){
            person.number = body.number
        }
    })
    return response.send(persons)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    return response.status(204).end()
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
