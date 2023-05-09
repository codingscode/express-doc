
import express from 'express'

const app = express()

app.use(express.json())


const cb0 = (req, res, next) => {
  console.log('CB0')
  next()
}

const cb1 = (req, res, next) => {
  console.log('CB1')
  next()
}

const cb2 = (req, res) => {
  res.send('Olá de C!')
}

app.get('/exemplo/c', [cb0, cb1, cb2])






// App listening on the below port
app.listen(3000, function(err){
    if (err) console.log(err)
    console.log('Servidor escutando na porta', 3000)
})












