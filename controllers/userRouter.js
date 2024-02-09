const express=require("express")
const userModel=require("../models/userModel")


const router=express.Router()
const bcrypt=require("bcryptjs")
hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/useradd",async(req,res)=>{
  let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
           console.log(hashedPassword) 
           data.password=hashedPassword
           let user=new userModel(data)
           let result=user.save()
           res.json({
            status:"success"
        })
        }
    )
    console.log(data)

    

})
module.exports=router