
import express from 'express'


var app = express()

app.use(express.json())


var greet = express.Router()

greet.get('/jp', (req, res) => {
  console.log(req.baseUrl) // /greet
  res.send('Konichiwa!')
})

app.use('/greet', greet) // load the router on '/greet'


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

