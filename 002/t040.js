
import express, { Router } from 'express'
import fs from 'fs'


var app = express()
var router = Router()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000/usuario/9
app.get('/', [
   function (req, res, next) {
     fs.readFile('t040.txt', 'utf-8', (err, data) => {
       res.locals.data = data
       next(err)
     })
   },
   function (req, res) {
     res.locals.data = res.locals.data.split(',')[1]
     res.send(res.locals.data)
   }
])


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















