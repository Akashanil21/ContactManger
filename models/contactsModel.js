const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        require: true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('contacts',contactSchema);