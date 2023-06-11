
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000/usuario/9
app.get('/usuario/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})

// handler for the /usuario/:id path, which prints the usuario ID
app.get('/usuario/:id', (req, res, next) => {
  res.send(req.params.id)
})

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















