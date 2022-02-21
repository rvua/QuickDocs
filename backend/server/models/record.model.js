const mongoose = require("mongoose");
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const emailValidator = [
    validate({
      validator: 'isEmail',
      message: 'Email must be valid.'
    })
  ];

// const ageValidator = [
//     validate({
//         validator: 'isLength',
//         arguments: [5, 130],
//         message: 'You must be at least 5 years old and younger than 130'
//     })
// ]

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
        default: 18,
        required: [true, "Please Enter Age"],
        //validate: ageValidator
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Do Not Disclose"],
        required: [true, "Please select an option from the dropdown"]
    }

}, {timestamps:true})

//RecordSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;