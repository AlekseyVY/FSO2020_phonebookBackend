const mongoose = require('mongoose')


if(process.argv.length < 3){
    console.log('Please provide credentionals in order: node mongo.js <password>')
    system.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://Aleksey:${password}@fso2020part1-kcbzv.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})

const personsSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personsSchema)

const person = new Person({
    name: name,
    number: number
})
if(process.argv.length === 3){
    Person.find({}).then(result => {
        console.log('Phonebook: ')
        result.forEach(person => {
            console.log('Name: ',person.name, ' Number: ', person.number)
        })
        mongoose.connection.close()
    })
} else {
    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}

