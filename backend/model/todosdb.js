const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/Todo',{ useNewUrlParser: true })

const Schema=mongoose.Schema;
const Todo=new Schema({
name:{
    type:String
},
age:{
    type:Number
}

})


module.exports=mongoose.model('Todo',Todo)