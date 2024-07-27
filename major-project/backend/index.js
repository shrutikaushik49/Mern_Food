const express = require('express')
const app = express()
const port = 5006
app.use(express.json());
const dishRouter = require('./routes/dishesRoutes');
const userRouter = require('./routes/userRoutes')
const orderRouter =require('./routes/ordersRoutes');
const mongoose = require('mongoose');
const cors = require("cors");

//allowing cross platform resource sharing
app.use(cors());

//connecting mongoDB
mongoose.connect('mongodb+srv://shrutikaushik7118:k8EHFgbgSIIIZpAS@cluster0.obicahp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

//middleWare
app.use((req,res,next)=>{
  console.log("Time:",Date.now());
  next();
 })

//api calls
app.use('/api',dishRouter);
app.use('/api',userRouter);
app.use('/api',orderRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})