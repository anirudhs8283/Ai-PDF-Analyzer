require('dotenv').config()
const express = require('express')
const router = require('./routes/pdf.route')
const { globalError } = require('./middlewares/gloablerrorhandler')
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use('/api',router)
app.use(globalError)


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})