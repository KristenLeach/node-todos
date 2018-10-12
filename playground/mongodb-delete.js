//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        //console.log success will run anyways unless return is included in if block, unless using an else block with if
        return console.log('Unable to connect to MongoDB server.')
    }

    console.log('Connected to MongoDB server.')
    const db = client.db('TodoApp')

    //delete many
    // db.collection('Todos').deleteMany({text: "Make dinner"}).then((res) => {
    //     console.log(res)
    // })

    //delete one
    // db.collection('Todos').deleteOne({text: "Make dinner"}).then((res) => {
    //     console.log(res)
    // })

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res)
    // })

    // db.collection('Users').deleteMany({name: 'Kristen'}).then((res) => {
    //     console.log(res)
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bc0fbc93d9c8f3e3d2e6306')}).then((res) => {
        console.log(res)
    })

    //db.close();
});