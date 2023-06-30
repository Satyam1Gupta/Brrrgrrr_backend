import mongoose from "mongoose";
const orderSchema=mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'blogsignup', //blogsignup is the user collection name
    },
    burgerId: [ {type: mongoose.Schema.Types.ObjectId, ref: 'postData'}, ]
},
)
const Order= mongoose.model('order',orderSchema);
export default Order;
