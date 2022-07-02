const express = require("express");
const Store = require("../models/store")
const {BadRequestError,NotFoundError} = require("../utils/errors")
const router = express.Router();

router.post("/", async (req, res, next) => {
   try {
      const cart = req.body.shoppingCart;
      console.log("sh", cart)
      const user = req.body.user;
      const newPurchase = await Store.createPurchase(user, cart);
      console.log("user=", user)
      res.status(201).json({purchase:newPurchase});
   } catch (error) {
      console.log("error in catch")
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

router.get("/:productId", async (req, res, next) => {
   try{
      const productId = req.params.productId;
      const response = await Store.getProductById(productId);
      res.status(200).json({"product":response})
   }catch(error)  {
      next(error);
}
  
})

module.exports = router;