
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 
var greet = express.Router()

greet.get('/jp', (req, res) =>{
   console.log(req.baseUrl) // /greet
   res.send('Konichiwa!')
})

// http://localhost:3000/greet/jp
app.use('/greet', greet) // load the router on '/greet'


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















