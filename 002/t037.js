
import express, { Router } from 'express'



var app = express()
var router = Router()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// View engine setup
app.set('view engine', 'ejs');

// http://localhost:3000/usuario/9
// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/usuario/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /usuario/:id path
router.get('/usuario/:id', (req, res, next) => {
  // if the usuario ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.render('t037')
})

// handler for the /usuario/:id path, which renders a special page
router.get('/usuario/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('t037-b')
})

// mount the router on the app
app.use('/', router)

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















