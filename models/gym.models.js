
import mongoose from "mongoose"

const gymSchema = new mongoose.Schema({
    gymToolsImage:{
        type:String,
        required:true
    },
    gymToolsPrice:{
        type:Number,
        required:true
    },
    gymToolsName:{
        type:String,
        required:true
    },
    gymToolsRatings:{
        type:Number,
        required:true,
    }
},  
 {
    timestamps:true
 }
)

const Gym= mongoose.model("Gym",gymSchema)

export default Gym;