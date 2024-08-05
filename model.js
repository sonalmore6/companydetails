const mongoose=require('mongoose')

const company= new mongoose.Schema({
    companyName:String,
    address: String,
    phoneNumber:String,
    email: String,
    industry: String,
    employees: String
})

module.exports=mongoose.model("companydeatails",company)