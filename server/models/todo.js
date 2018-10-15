const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved Todo:", doc)
// }, (e) => {
//     console.log('Unable to save Todo')
// });

module.exports = {Todo}