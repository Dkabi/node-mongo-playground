const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log("unable to connecct")
    }
    console.log("successfully connected");
    // db.collection('Todos').insertOne({
    //     text:"something to do",
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("unable to insert todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    db.collection('Users').insertOne({
        name:'amit',
        age:28,
        location:'BBSR'
    },(err,result)=>{
        if(err){
            return console.log("unable to create",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })
    db.close();
})