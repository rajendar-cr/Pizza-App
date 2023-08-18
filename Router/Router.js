const express=require('express')
const Router=express.Router()
const Pizza=require('../PizzaModel')
Router.get('/getAllPizzas',async(req,res)=>{
  const data=await Pizza.find({})
  try {
    res.status(200).send(data)
  } catch (error) {
    res.status(400).json({message:error})
  }
})
module.exports=Router