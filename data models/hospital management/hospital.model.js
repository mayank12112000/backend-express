const { default: mongoose } = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        requred:true
    },
    addressLine2:String,
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specializedIn:[
    {
        type:String,
        default:null
    }
    ]
},{timestamps:true})

export const Hospital = mongoose.model("Hospital",hospitalSchema)