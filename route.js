const express =require('express')
const controller=require('./controller')

const route=express.Router()

route.get('/get',controller.get)

route.post('/add',controller.add)

route.delete('/delete/:id',controller.deleteid)
module.exports=route