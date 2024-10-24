const express = require('express')
require('dotenv').config()
const app = express()
const port =  process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("mayank1211")
})

app.get("/instagram",(req,res)=>{
    res.send("<h1>Mayank Keshari</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})