
import express from 'express'

const app = express()

app.use(express.json())


app.route('/livro')
  .get((req, res) => {
    res.send('acessar um livro aleatório')
  })
  .post((req, res) => {
    res.send('adicionar um livro')
  })
  .put((req, res) => {
    res.send('atualizar umlivro')
  })



// App listening on the below port
app.listen(3000, function(err){
    if (err) console.log(err)
    console.log('Servidor escutando na porta', 3000)
})
