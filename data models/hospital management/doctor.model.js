import mongoose from "mongoose";

const hospitalAndHours = new mongoose.Schema({
    worksIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true,
    },
    numberOfHours:{
        type:Number,
        required:true
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        required:true,
        default:0
    },
    worksIn:[hospitalAndHours]
},{timestamps:true})

export const DoctorModel = mongoose.model("Doctor",doctorSchema)