const { storage } = require("../data/storage");

class Store{

    static async createPurchase(user,shoppingCart){
          };
        storage.get("purchases").push(newPurchase).write()

        return newPurchase
    }
    
    static async listPurchases(){
        // list purchases in db
    }



    static async listProducts() {   // listing all products
        const products = storage.get("products")
        return products;
    }

    static async getProductById(productId) {  // get specific product
        const product = storage.get("products").find({id:Number(productId)}).value();
        if(!productId){
        return "no product"  // check if product doesnt exit
        }
        return product

    }
    static async getPurchases() {
        const purchases = storage.get("purchases");
        return purchases
      }
}
module.exports= Store;