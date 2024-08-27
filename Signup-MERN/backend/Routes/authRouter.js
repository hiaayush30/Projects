const express=require('express');
const { loginValidation, signupValidation } = require('../Middlewares/authValidation');
const router=express.Router();
const {signup, login}=require('../Controllers/authController');

router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);

module.exports=router;