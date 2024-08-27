require('dotenv').config();
const cors=require('cors');
const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const authRouter=require('./Routes/authRouter.js');
const productRouter=require('./Routes/productRouter.js');

require('./config/dbconfig.js');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

app.use('/auth',authRouter);
app.use('/products',productRouter);

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
     console.log('server running on port '+PORT);
})

