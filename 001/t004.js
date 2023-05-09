
import express from 'express'
import passaros from './passaro.js'

const app = express()

app.use(express.json())

app.use('/passaros', passaros)



// App listening on the below port
app.listen(3000, function(err){
    if (err) console.log(err)
    console.log('Servidor escutando na porta', 3000)
})

