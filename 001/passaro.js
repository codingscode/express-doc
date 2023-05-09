
import { Router } from 'express'

const router = Router()



// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Hora: ', Date.now())
  next()
})
// define a rota pagina inicial
router.get('/', (req, res) => {
  res.send('passaro pagina inicial')
})
// define a rota sobre
router.get('/sobre', (req, res) => {
  res.send('sobre passaros')
})

export default router
