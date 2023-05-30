

const algo = (req, res) => {
   res.send('The views directory is ' + req.app.get('views'))
}

export default algo
