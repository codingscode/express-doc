
import express, { Router } from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var router = Router()


// http://localhost:3000/usuario/42
router.param('id', (req, res, next, id) => {
   console.log('chamado apenas uma vez')
   next()
})

router.get('/usuario/:id', (req, res, next) => {
  console.log('embora isto combine')
  next()
})

router.get('/usuario/:id', (req, res) => {
  console.log('e isto combina também')
  res.end()
})

app.use('/', router)

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















