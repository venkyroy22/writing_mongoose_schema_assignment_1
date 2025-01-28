const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    
})


const activitySchema = new mongoose.Schema({
    lastLogin: Date,
})


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type: String,
        unique:true,
        required:true


    },

    password:{
        type: String,
        required:true

    },
    roles: [String],
    profile: profileSchema,
    activity: activitySchema, 


})


module.exports = mongoose.model("user", userSchema)
