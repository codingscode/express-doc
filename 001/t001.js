
import express from 'express'

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('GET request to the homepages')
})

// POST method route
app.post('/', (req, res) => {
    res.send('método post utilizado')
})

// App listening on the below port
app.listen(3000, function(err){
    if (err) console.log(err)
    console.log('Servidor escutando na porta', 3000)
 })






