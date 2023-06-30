import mongoose from "mongoose";
const postSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    },
    createDate:{
        type:Date
        
    }
})
const User= mongoose.model('postData',postSchema);
export default User;
