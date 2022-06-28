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
        let reciptTotal = 0
        for (let i = 0; i < shoppingCart.length; i++) {
            let quantity = shoppingCart[i].quantity;
            let idItem = shoppingCart[i].itemId
            console.log("itemid=",idItem)
            let price = Store.getProductById(idItem).price;
            console.log("price=",price)
            reciptTotal = reciptTotal+(price * quantity)
            console.log("rec=",reciptTotal)
          }
          console.log("check2=",reciptTotal)
        reciptTotal = reciptTotal+(reciptTotal * .0875) 
        console.log("check3=",reciptTotal)
        let CreatedAt = new Date().toISOString();
          console.log("user.name=", user.name)
          console.log("email=", user.email)
        let newPurchase = {
        id:storage.get("purchases").value().length+1,
        name:user.name,
        email: user.email,
        order:shoppingCart,
        total: reciptTotal,
        createdAt: CreatedAt
        }

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