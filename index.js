const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

const Payee= require("./routes/Routes");
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/stk',Payee)
const Port = 5000;



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to Db succefull');
}).catch((err)=>{
    console.error(err.message);
})


app.listen(Port, () => {
  console.log(`app is listening on port :${Port}`);
});


