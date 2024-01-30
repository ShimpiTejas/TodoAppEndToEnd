const express = require('express');
const app = express();
const PORT = 3000;
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');



app.use(express.json());



app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Something with Your Inputs"
        })
        return;

    
    }

    // put it in MongoDB


    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })


    res.json({
        msg : "TODO Created!!!"
    })
})


app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    console.log(todos)
    res.json({
        todos
    })
})



app.put("/completed", async function(req, res){ 
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs!!!"
        })

        return;
    }

    await todo.updateOne({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json({
        msg : "Todo Marked as completed"
    })

   

})


app.get('/', function(req, res){
    res.json({
        msg : "Server is Running !"
    })
})

app.listen(PORT, function(){
    console.log(`Server running at port ${PORT}`);
})