const express = require("express")
var app = express()
const morgan = require("morgan")
const{NotFoundError}= require("./utils/errors")
const storeRouter = require("./routes/store")
const cors = require("cors")



app.use(morgan("tiny"))
app.use(express.json())


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested, Content-Type, Accept Authorization"
//   )
//   if (req.method === "OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods",
//       "POST, PUT, PATCH, GET, DELETE"
//     )
//     return res.status(200).json({})
//   }
//   next()
// })

app.use(cors())


// app.options('*', cors())
app.use("/store", storeRouter);

app.get('/', (req, res) => {
  res.status(200).send({ping:"pong"})
})

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




  module.exports=app // exporting app as default
