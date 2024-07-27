const express = require('express');
const router = express.Router();
const {getDishes}=require("../controllers/DishesController");

router.get("/dish",getDishes);


module.exports= router;