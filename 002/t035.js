
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000/usuario/9
app.get('/usuario/:id', (req, res, next) => {
  // if the usuario ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

// handler for the /usuario/:id path, which sends a special response
app.get('/usuario/:id', (req, res, next) => {
  res.send('special')
})

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















