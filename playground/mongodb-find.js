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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bc0f4b7004e403cf6059020')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch Todos.', err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}` );
    // }, (err) => {
    //     console.log('Unable to fetch Todos.', err)
    // })

    db.collection('Users').find({name: 'Kristen'}).toArray().then((docs) => {
        console.log(`Todos` );
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch Todos.', err)
    })

    //client.close();
});