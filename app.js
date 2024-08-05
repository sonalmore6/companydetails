const express =require('express')
const app=express()
const mongoose=require('mongoose')
const route=require('./route')

mongoose.connect("mongodb://localhost:27017/company")
.then(()=>console.log("connected "))
.catch(()=>console.log("not connected"))

app.use(express.json())

app.use("/",route)

app.get('/',function(req,res){
    res.send("company details")
})

app.listen(8000,console.log("conneted"))