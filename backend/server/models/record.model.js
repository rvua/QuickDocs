const mongoose = require("mongoose");
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const emailValidator = [
    validate({
      validator: 'isEmail',
      message: 'Email must be valid.'
    })
  ];

const RecordSchema = new mongoose.Schema({
    // name, email, age, gender
    name: {
        type: String,
        required: [true, "Please enter a name for the Record"],
        minLength: 1,
        maxLength: 40 
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: true,
        validate: emailValidator,
    },
    age: {
        type: Number,
        min: 5,
        max: 130,
        default: 18
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Do Not Disclose"],
        required: [true, "Please select an option from the dropdown"]
    }

}, {timestamps:true})

RecordSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;