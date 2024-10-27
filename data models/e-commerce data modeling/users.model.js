import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
    },
    password:{
        type:String,
        required:true,
        lowerCase:true,
        min:[4,"value should be atleast 4 characters, got {value}"]
    },
    mobileNo:{
        type:Number,
        required:true,
        unnique:true
    }
},{timestamps:true})
// timestamps give createon & updateon 
export const User = mongoose.model("User",userSchema)