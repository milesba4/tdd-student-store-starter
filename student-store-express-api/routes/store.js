const express = require("express");
const Store = require("../models/store")
const {BadRequestError,NotFoundError} = require("../utils/errors")
const router = express.Router();

router.post("/", async (req, res, next) => {
   try {
      const shoppingCart = req.body.shoppingCart;
      const user = req.body.user;
      const newPurchase = await Store.createPurchase(user, shoppingCart);
      res.status(201).json({post : {purchase:newPurchase}});
   } catch (error) {
      next(error);
   }
})

router.get("/", async (req, res, next) => {
   try{
      const response = await Store.listProducts();
      res.status(200).json({"products":response})
   }catch(error)  {
      next(error);
}
  
})


module.exports = router;