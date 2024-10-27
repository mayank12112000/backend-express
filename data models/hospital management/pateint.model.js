const { default: mongoose, mongo } = require("mongoose");

const pateintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true,
        max:[2,"max characters should be 2, got {value}"],
    },
    gender:{
        type:String,
        enum:["M","F","O"]
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true})

export const Pateint = mongoose.model("Pateint",pateintSchema)