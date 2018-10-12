//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        //console.log success will run anyways unless return is included in if block, unless using an else block with if
        return console.log('Unable to connect to MongoDB server.')
    }

    console.log('Connected to MongoDB server.')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo.', err)
    //     }

    //     console.log(JSON.stringify(result.ops))
    // })

    // db.collection('Users').insertOne({
    //     name: "Kristen",
    //     age: 28, 
    //     location: "San Jose",
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to add user to Users list.', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    client.close();
});