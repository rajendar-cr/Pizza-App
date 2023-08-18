const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:String,require},
    email:{type:String,require},
    password:{type:String,require},
    Admin:{type:Boolean,default:false}
   
},{
    timestamps:true
})

const UserModel=mongoose.model('users',userSchema)
module.exports=UserModel