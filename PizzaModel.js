const mongoose=require('mongoose')

const pizzaSchema=mongoose.Schema({
    name:{type:String,require},
    Varients:[],
    prices:[],
    category:{type:String,require},
    image:{type:String,require},
    description:{type:String,require},
    
    },{timestamps:true
})

const pizzaModel=mongoose.model('Pizza',pizzaSchema)
module.exports = pizzaModel