const mongoose = require('mongoose')

const User = mongoose.model('User', {
    email:{
        type: String, 
        require: true, 
        trim: true,
        minlength: 1
    } 
})

// let newUser = new User({
//     email: "kristen@email.com"
//     }).save()
//     .then((doc) => {
//         console.log(doc)
//     }, (e) => {
//         console.log(e)
// })

module.exports = {User}