
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000/usuario/9
app.use('/usuario/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})


app.get('/usuario/:id', (req, res, next) => {
  res.send('USER')
})

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















