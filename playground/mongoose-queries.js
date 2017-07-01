const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user.js');

const {Stuff} = require('./../server/models/stuff.js');

// var id = '5XXX949cafd34e6502e3b9dbfd2';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not Valid, player');
// };

// Todo.find({
//     _id: id

// }).then((recordFound)=>{
//     if(recordFound == []) {
//         return console.log('Nope nothing found 1');
//     }
//     console.log('Todos', recordFound);

// });

// Todo.findOne({
// _id: id

// }).then((Onetodo)=>{

//         if(!Onetodo) {
//         return console.log('Nope nothing found 2');
//     }
//     console.log('Todos', Onetodo);

// });

// Todo.findById(id).then((Antodo)=>{

//         if(!Antodo){
//         return console.log('No Record Found, Yo')
//     }
//     console.log('Todos', Antodo);

// }).catch((e) => console.log('I caught the error'));


var id = '5949cafd34e6502e3b9dbfd2';
//var id = '594b2f45d9befa8e4196b2b3';

Todo.findById(id).then((theStuff)=>{

        if(!theStuff){
        return console.log('No User Found Today')
    }
    console.log('User: ', theStuff);

}).catch((e) => console.log('I caught the error'));