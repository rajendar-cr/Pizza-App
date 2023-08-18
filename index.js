const express=require('express');
const cors=require('cors')
const PizzaRouter=require('./Router/Router')
const UserRoute=require('./Router/UserRoute')
const OrderRouter=require('./Router/OrderRouter')
const app=express()
app.use(express.json())
app.use(cors())
const port=process.env.PORT || 5000
require('./db.js')
app.use('/api/pizzas/',PizzaRouter)
app.use('/api/users/',UserRoute)
app.use('/api/users/',UserRoute)
app.use('/api/orders/',OrderRouter)
app.listen(port,()=>{
    console.log('server running on port'+port)
})