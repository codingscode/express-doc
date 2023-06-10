
import express, { Router } from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var router = Router()



// http://localhost:3000
const myLogger = (req, res, next) => {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















