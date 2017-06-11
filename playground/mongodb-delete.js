//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    db.collection('Todos').deleteMany({name: 'Big Dave'}).then((result)=>{
        console.log(result);
    })

//    // deleteOne
//    db.collection('Todos').deleteOne({text: 'something to do'}).then((result)=>{
//        console.log(result)
//    })
//    // findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
//        console.log(result);
//    })

// Delete One Record by Object ID
// First print out the Ojbect ID so that you can copy and past 
// db.collection('Users').find({text: 'Walk the dog'}).toArray().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));},
//     (err)=>{
//         console.log('Unable to fetch from dbMongo',err);
//     });
    
// Next, we are going to delete the object

//deleteOne


   db.collection('Users').findOneAndDelete({_id: new ObjectID("593c838c0829f6f92f79a21b")}).then((result)=>{
       console.log(result);
   })


    
    // db.close();

 });


