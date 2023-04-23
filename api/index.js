const express = require('express');
const app = express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRoute=require('./routes/user');

dotenv.config();
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.MONGO_URL,connectionParams).then(()=>{console.info("Connected to database")}).catch((e)=>{console.log("Error",e);});

app.use(express.json());
app.use("/api/users",userRoute);
app.listen(process.env.PORT || 5000,()=>console.log("Server started"));