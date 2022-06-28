const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store{

    static async createPurchase(user,shoppingCart){
          };
    static createPurchase(user,shoppingCart){
        if(user.email == "" || shoppingCart.length==0 || user.name ==""){
        throw new BadRequestError("Missing email or user or no items in shopping cart")
        }
        let checkShoppingCart = []
        shoppingCart.map((item)=>{
        if (checkShoppingCart.includes(item)){
                throw new BadRequestError("duplicate in shopping cart")
        }
        checkShoppingCart.push(item)
        })
        storage.get("purchases").push(newPurchase).write()

        return newPurchase
    }
    
    static listPurchases(){
        // list purchases in db
    }



    static listProducts() {   // listing all products
        const products = storage.get("products")
        return products;
    }

    static getProductById(productId) {  // get specific product
        console.log("prod=",productId)

        const product = storage.get("products").find({id:Number(productId)}).value();
        console.log("prod=",productId)
        return product

    }
    static getPurchases() {
        const purchases = storage.get("purchases");
        return purchases
      }
}
module.exports= Store;