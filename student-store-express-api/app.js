const express = require("express")
const app = express()
const morgan = require("morgan")
const{NotFoundError}= require("./utils/errors")
const storeRouter = require("./routes/store")
app.use("/store", storeRouter);

app.use(morgan("tiny"))
app.use(express.json())

app.use((req,res,next)=>{
  return next(new NotFoundError())
})

app.use((error,req,res,next)=>{
const status = error.status || 500
const message = error.message

return res.status(status).json({
  error:{message,status}
})

})

app.get('/', (req, res) => {
    res.status(200).send({ping:"pong"})
  })



  module.exports=app // exporting app as default
