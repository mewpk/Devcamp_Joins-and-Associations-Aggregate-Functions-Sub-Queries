const express = require('express')
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

app.use(cors())

app.use("/",(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("Listen PORT ----> 3000")
})