const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.use(express.static("build"))

app.post("/submit-survey", (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(8888, () => {
  console.log("Server listening on port 8888")
})
