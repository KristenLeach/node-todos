const mongoose = require('mongoose');

//mongoose runs async; will wait for connection before running the rest of the code
//mongoose.Promise sets it up to use promises, only needs to be written once
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};