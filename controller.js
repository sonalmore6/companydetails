const model=require('./model')


const get =async (req,res)=>{
 try {
    
    const data=await model.find()
    res.send(data)

} catch (error) {
    console.log(error);
    res.send(error)
 }
}

const add =async (req,res)=>{
    try {
     const{ companyName,address,phoneNumber, email, industry, employees}=req.body
     const data1= new model({companyName,address,phoneNumber, email, industry, employees})  
    const savedata= await data1.save()
    res.send(savedata)
   
   } catch (error) {
       console.log(error);
       res.send(error)
    }
   }


   const deleteid =async (req,res)=>{
    const {id}=req.params
    try {
       const data=await model.findByIdAndDelete(id)
   
    if (data) {
        res.send("deleted successfully")
    } else {
        res.send("data not found")
    }
   } catch (error) {
       console.log(error);
       res.send(error)
    }
   }


module.exports={get,add,deleteid}