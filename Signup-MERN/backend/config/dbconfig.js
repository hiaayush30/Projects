const mongoose=require('mongoose');

const dbConnection=mongoose.connect(process.env.DB_CONNECTION_URL)
.then(()=>{console.log('DB connected!')})
.catch((err)=>{console.log('db connetion error::'+err)});

module.exports=dbConnection;