
import express from 'express'

var app = express()

app.use(express.json())


// this middleware will not allow the request to go beyond it
app.use((req, res, next) => {
   res.send('Olá mundo')
})

// requests will never reach this route
app.get('/', (req, res) => {
   res.send('Bemvindo')
})

// a ordem influencia

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

