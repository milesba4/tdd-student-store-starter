const express = require("express");
const Store = ("../models/store")
const {BadRequestError, NotFoundError} = require("../utils/errors");
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
