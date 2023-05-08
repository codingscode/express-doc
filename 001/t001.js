
import express from 'express'

const app = express()

app.use(express.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('método get utilizado')
})

// POST method route
app.post('/', (req, res) => {
    const valor_post = req.body
    res.send('método post utilizado')
    console.log(valor_post)
})

// App listening on the below port
app.listen(3000, function(err){
    if (err) console.log(err)
    console.log('Servidor escutando na porta', 3000)
})


app.all('/segredo', (req, res, next) => {
    console.log('Acessando a seção segredo...')
    next() // pass control to the next handler
})







