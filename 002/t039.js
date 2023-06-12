
import express, { Router } from 'express'
import fs from 'fs'


var app = express()
var router = Router()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000
app.get('/', (req, res, next) => {
  fs.readFile('t039.txt', (err, data) => {  // colocar endereço errado
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















