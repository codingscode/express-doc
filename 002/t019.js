
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// http://localhost:3000/user/3
app.get('/user/:id', (req, res) => {
   res.send('user ' + req.params.id)
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

