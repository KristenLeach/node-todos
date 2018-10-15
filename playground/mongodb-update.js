//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        //console.log success will run anyways unless return is included in if block, unless using an else block with if
        return console.log('Unable to connect to MongoDB server.')
    }

    console.log('Connected to MongoDB server.')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID("5bc10b78a1b649bef146cfea")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID("5bc0fae75d86c73e1191311b")
    }, {
        $set: {
            name: "James"
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })

    //db.close();
});