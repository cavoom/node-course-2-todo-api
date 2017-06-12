//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

//     db.collection('Users').findOneAndUpdate({
//         _id: new ObjectID('593c55a48b5a9f9741236d97')
//     }, {$set: {
//         name: 'LSK'
//     }
// }, { returnOriginal: false
//     }).then((result)=>{
//         console.log(result);
//     })
    
    // Increment age by 28
    db.collection('Users').update(
        {name: "LSK"},
        {$inc: { age: 26} }

    )
    // db.close();

 });


