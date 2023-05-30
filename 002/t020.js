
import express from 'express'
import algo from './t020-2.js'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// http://localhost:3000/viewdirectory
app.get('/viewdirectory', algo)



app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

