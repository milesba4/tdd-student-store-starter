
const express = require("express")
const app = express()
const morgan = require("morgan")

module.exports=app // exporting app as default
app.use(morgan("tiny"))
app.use(express.json())
app.get('/', (req, res) => {
<<<<<<< Updated upstream
    res.status(200).send({products})
=======
    res.status(200).send({ping:pong})
>>>>>>> Stashed changes
  })