const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

id = '5bce10c4173c736107ce03a811';
userId = "5bc4df16c6e41f75530375f3"

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("ID not found.")
//     }
//     console.log('Todo by ID', todo)
// }).catch((e) => console.log(e))

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found.')
    }
    console.log('User:', user)
}).catch((e) => console.log(e))