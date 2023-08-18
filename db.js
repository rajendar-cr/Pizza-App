const mongoose=require('mongoose')
require('dotenv').config()

const DB_USER=process.env.DB_USER
const DB_PASSWORD=process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.uk8ghba.mongodb.net/PizzaApp`,{useNewUrlParser:true},{useUnifiedTopology:true})

mongoose.connection.on('connected',()=>{
    console.log('connected')
})
mongoose.connection.on('error',()=>{
    console.log('error')
})