
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// http://localhost:3000/user/algo
app.get('/user/:id?', function userIdHandler (req, res) {  // (req, res) => {
   console.log(req.route)
   res.send('GET')
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

