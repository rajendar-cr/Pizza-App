const express=require('express');
const Router=express.Router()

const Order=require('../OrderModel')

Router.post('/placeorder',async(req,res)=>{
const {token,subTotal,currentUser,cartItem}=req.body;
const newOrder=new Order({
    name:currentUser.name,
    email:currentUser.email,
    userid:currentUser._id,
    orderItems:cartItem,
    shippingAddress:{
        street:token.card.address_line1,
        city:token.card.address_city,
        country:token.card.address_country,
        pincode:token.card.address_zip
    },
    orderAmount:subTotal,
    
})
try {
   
    if(token){
        newOrder.save()
        res.send('order Placed successfully')
    }else{
        res.send('Payment Fail')
    }
} catch (error) {
    return res.status(400).json({message:'something went wrong'+error})
}

})
Router.post('/getuserorders',async(req,res)=>{
    const {userid}=req.body
    try {
        const orders=await Order.find({userid:userid}).sort({_id:-1})
        res.status(200).send(orders)
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})
module.exports=Router