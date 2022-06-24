const { storage } = require("../data/storage");

class Purchase{

    static async createPurchase(purchase){
        //create purchase 
        const purchasedAt = new Date().toISOString()
        const newPurchase = {...purchase, purchasedAt}

        storage.get("purchases").push(newPurchase).write()
    return newPurchase
    }

    static async listPurchases(){
        // list purchases in db
    }

}
module.exports=Purchase