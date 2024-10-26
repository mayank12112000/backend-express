import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
        content: {
          type: String,
          required: true,
        },
        complete: {
          type: Boolean,
          required: true,
          default: false,
        },
        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref :"User"
        }
    ]
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)