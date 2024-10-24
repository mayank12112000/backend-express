const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/instagram",(req,res)=>{
    res.send("<h1>Mayank</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})