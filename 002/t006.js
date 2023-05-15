
import express from 'express'

var app = express()

app.use(express.json())

//
app.param(['id', 'page'], (req, res, next, value) => {
  console.log('chamado somente uma vez com', value)
  next()
})

app.get('/user/:id/:page', (req, res, next) => {
  console.log('embora isto combine')
  next()
})

app.get('/user/:id/:page', (req, res) => {
  console.log('e isto combine também')
  res.end()
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

