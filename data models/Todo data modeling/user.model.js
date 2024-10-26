import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    userNmae: {
        type:String,
        required:true,
        lowerCase:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:[true,"email is already present, got {value}"]
    },
    password:{
        type:String,
        min:[4, "password must be atleast of 4 characters, got {value}"],
        required:true
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)