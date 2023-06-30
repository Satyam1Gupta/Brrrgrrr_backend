import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        //here required true is in pending task....>
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})
const User= mongoose.model('blogsignup',userSchema);
export default User;
