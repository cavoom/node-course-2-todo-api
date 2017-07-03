const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user.js');

// // Todo.remove({}) This removes EVERYTHING
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });


//Todo.findOneAndRemove
Todo.findOneAndRemove('595abf8a6028d7a8d1421796').then((todo)=>{
    console.log('I found it', todo);
})


//Todo.findByIdAndRemove

Todo.findByIdAndRemove('595abf8a6028d7a8d1421796').then((todo)=>{
    console.log('I found it', todo);
})


