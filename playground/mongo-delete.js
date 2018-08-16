const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  //Delete many
//   db.collection('Users').deleteMany({name:"Prabhu"}).then((result)=>{
//       console.log(result)
//   })

   //Delete One
    // db.collection('Users').deleteOne({name:"amit"}).then((result)=>{
    //     console.log(result)
    // })

    //find one delete
    db.collection('Users').findOneAndDelete({name:"dk"}).then((result)=>{
        console.log(result)
    })
});  