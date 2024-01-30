/*
    Todo {
        title : string
        description : string
        completed : boolean
    }
 */
    // mongodb+srv://root:root@cluster0.gzpyryp.mongodb.net/?retryWrites=true&w=majority

    const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://root:root@cluster0.gzpyryp.mongodb.net/TodoAppCohort");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports ={
    todo
}