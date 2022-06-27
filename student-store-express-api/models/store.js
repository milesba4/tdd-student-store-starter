const { storage } = require("../data/storage");

class Purchase{

    static async createPurchase(purchase){
        //create purchase 
        const purchasedAt = new Date().toISOString()
        const newPurchase = {...purchase, purchasedAt}

        storage.get("purchases").push(newPurchase).write()
    return newPurchase
    }
class Store{
    
    static async createProducts(product){
        storage.get("products").push(product).write()

    return product
    }
    

    static async listPurchases(){
        // list purchases in db
    }



    static async listProducts() {   // listing products
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