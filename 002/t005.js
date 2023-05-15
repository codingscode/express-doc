
import express from 'express'

var app = express()

app.use(express.json())



app.param('id', (req, res, next, id) => {
  console.log('chamado somente uma vez')
  next()
})

app.get('/user/:id', (req, res, next) => {
  console.log('embora isto combine')
  next()
})

app.get('/user/:id', (req, res) => {
  console.log('e isto combine também')
  res.end()
})



app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

