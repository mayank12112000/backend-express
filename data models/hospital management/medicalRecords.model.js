const { default: mongoose } = require("mongoose");

const medicalRecordsSchema = new mongoose.Schema({

},{timestamps:true})

export const MedicalRecords = mongoose.model("MedicalRecords",medicalRecordsSchema)