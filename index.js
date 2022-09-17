const express = require('express')
const app = express()
const port = 3000

//http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Toi la Bao!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})