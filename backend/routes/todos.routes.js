const express=require('express')
const router=express.Router()
const Todo=require('../model/todosdb')


router.get('/',(req,res)=>{
    Todo.find((err,todos)=>{
        if(err)return err;
        else
        res.json(todos)
    })
})

router.get('/:id',(req,res)=>{
    let id=req.params.id;
    Todo.findById(id,(err,todo)=>{
        if(err)return err;
        else 
        res.json(todo)
    })
})
router.post('/add',(req,res)=>{
    let todo=new Todo(req.body)

    todo.save()
    .then(todo=>{
 res.status(200).json({'todo':'todo added sucessfully'+todo})
    })
.catch(err=>{
    res.status(400).json({'error':'added new todo failed'})
})
})

router.put('/update/:id',(req,res)=>{
    Todo.findById(req.params.id,(err,todo)=>{
        if(!todo){
            res.status(404).send('data not found')
        }
        else
        todo.name=req.body.name;
        todo.age=req.body.age;
        todo.save()
        .then(todo=>{
            res.json('updated sucessfully')
        })
        .catch(err=>{
        res.status(400).send('update not possible')
        })
    })
})
module.exports=router