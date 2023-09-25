const express = require('express')
const path  = require('path')
const fs = require('fs')
const app = express()
const port = 5000



app.get('/test', (req, res) => {
    console.log(req.ip)
    fs.appendFileSync(path.resolve(__dirname, 'result.txt'), req.ip + '\n' )
    res.status(200).json("test")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})