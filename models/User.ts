import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    surname:{
        type : String,
        required: true,
    },
    email:{
        type : String,
        required: true,
        unique : true,
    },
    password:{
        type : String,
        required: true,
        min : 8,
        max : 20,
    },
},{
    timestamps: true
})

export default mongoose.model("User",userSchema);