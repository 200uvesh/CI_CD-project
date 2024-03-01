
const express = require("express")
require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 7540

app.get("/home" , (req , res)=>{
    res.send("This is home Page")
})

app.listen(PORT , ()=>{
   console.log(`Server is Started at http://localhost:${PORT}`)
})

