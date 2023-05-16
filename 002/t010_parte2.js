
const exportar = (req, res) => {
   res.send('A visualização do diretório está ' + req.app.get('views'))
}

export default exportar