const router=require('express').Router();
const checkAuthentication=require('../Middlewares/auth');
const User = require('../Models/User');

router.get('/',checkAuthentication,(req,res)=>{
    console.log(req.user);
    res.status(200).json([
       {
        name:'mobile',
        price:'100000'
       },
       {
        name:'laptop',
        price:'100000000'
       },
       {
        name:'TV',
        price:'10000000'
       }
    ])
})

module.exports=router;