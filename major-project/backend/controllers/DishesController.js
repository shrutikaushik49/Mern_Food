const DishesModel= require("../model/Dishes")

const getDishes= async (req,res)=>{
  console.log(DishesModel);
  const dishes = await DishesModel.find({});
  console.log(dishes);
  res.send(dishes);
}
module.exports= {getDishes}