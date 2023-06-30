import Order from '../model/order.js'


export const orderBurger=async(req,res)=>{
 
    try{
        let user=await Order.findOne({customerId: req.body.userId})
        
        if(!user){
            const newOrder=new Order({ burgerId: req.body.burgerId,customerId:req.body.userId});
            await newOrder.save();
            return res.status(200).json({msg:"Oder successsful!"})
        }
        await Order.findOneAndUpdate(
            { customerId: req.body.userId },
            {
                $addToSet: {
                burgerId: req.body.burgerId,
               
                }
            }
            )
            .then(updatedOrder => {
                if (!updatedOrder) {
                return res.status(404).json("College not found",error)
                }
                return res.status(200).json('Your order placed successfully');
            })
            .catch(error => {
                console.error('Error adding/updating burgerId:', error)
            });
       }catch(error){
         res.status(500).json({msg:error.message})
       }
    }

export const getBurger=async(req,res)=>{
   // console.log(req.params.userId)
    try{
       
        let burgers=await Order.findOne({customerId: req.params.userId}).populate({path:'burgerId'})
        if(burgers){
            return res.status(200).json(burgers)
        }
       }catch(error){
         res.status(500).json({msg:error.message})
       }
    }

export const getBurgerWithCustomer=async(req,res)=>{
   // console.log(req.params.userId)
    try{
       
        let burgers=await Order.find().populate('burgerId').populate('customerId')
        if(burgers){
            return res.status(200).json(burgers)
        }
       }catch(error){
         res.status(500).json({msg:error.message})
       }
    }
    