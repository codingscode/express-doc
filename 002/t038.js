
import express, { Router } from 'express'



var app = express()
var router = Router()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000
app.get('/', (req, res) => {
  throw new Error('quebrado') // Express will catch this on its own.
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















