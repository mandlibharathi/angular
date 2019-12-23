const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const todoRoute=require('./routes/todos.routes')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/todos',todoRoute)

app.listen(5000,()=>{ 
    console.log(`server is running`)
})