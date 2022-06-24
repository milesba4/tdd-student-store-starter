const express = require("express")
const app = express()
const morgan = require("morgan")
const router = require("./routes/store");
app.use("/store", router);
module.exports=app // exporting app as default
app.use(morgan("tiny"))
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send({ping:"pong"})
  })