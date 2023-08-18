
const express=require('express')
const Router=express.Router()
const UserModel=require('../UserModel')
Router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
 const user=new UserModel({name,email,password})
  try {
     
  user.save()
    res.status(200).send('User Registered Successfully')
  } catch (error) {
    res.status(400).json({message:error})
  }
})
Router.post('/login',async(req,res)=>{
  const {email,password}=req.body


try {
  const user=await UserModel.find({email,password})
 if(user.length > 0){
  const currentUser={
    name:user[0].name,
    email:user[0].email,
    Admin:user[0].Admin,
    _id:user[0]._id
  }
  res.status(200).send(currentUser)
 }else{
  res.status(400).send('User Logined Failed')
 }
 
} catch (error) {
  res.status(400).json({message:error})
}
})
module.exports=Router