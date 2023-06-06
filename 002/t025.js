
import express from 'express'
import qs from 'qs'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/*
app.setting('query parser', function (str) {
   return qs.parse(str, {  custom options  })
})
*/

// http://localhost:3000/usuario/3
app.get('/usuario/:id?', function userIdHandler (req, res) {
   console.log(req.route)
   res.send('GET')
})



app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















