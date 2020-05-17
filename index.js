require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./modules/Person')



morgan.token('body', function getBody(request) {
    return JSON.stringify(request.body)
})


app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(express.static('build'))



const generateId = () => {
    const rndId =  Math.floor(Math.random() * 1000000)
    return rndId
}

const findName = (name) => {
    const filterName = persons.find(person => person.name === name)
    return !(filterName);
}



app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.get('/info', (request, response) => {
    Person.find({}).then(persons => {
        response.send(`<h1>phonebook has info for ${persons.length} people</h1>` + `<h2>${Date()}</h2>`)
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name || !body.number){
        return response.status(400).json({error: 'content missing'})
    }

    const person = new Person ({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})
/*
app.put('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const body = request.body

    const person = new Person ({
        name: body.name,
        number: body.number
    })

    Person.findById(id).then(person => {
        person.save()
    })
})
*/
app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id).then(
        response.status(204).end()
    )
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
