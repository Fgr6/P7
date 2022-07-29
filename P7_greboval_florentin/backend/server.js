const express = require('express')
require('dotenv').config()

const path = require('path')

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use(express.static('../frontend/build'))

app.get('/api/test', (_, res) => {
    res.send({
        msg: 'Hello test'
    })
})

app.get('/*', (_, res) =>{
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

app.listen(5000, () => {
    console.log(`Port : ${PORT}`)
})