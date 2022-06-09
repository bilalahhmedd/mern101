const express = require('express')
const mongo = require("mongodb").MongoClient

const app  = express()

// add url for mongodb
const url = "mongodb://localhost:27017"

let db, trips, expenses

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("tripcost")
    trips = db.collection("trips")
    expenses = db.collection("expenses")
  }
)


// adding stubs now

app.post("/trip", (req, res) => {
    /* */
  })
  app.get("/trips", (req, res) => {
    /* */
  })
  app.post("/expense", (req, res) => {
    /* */
  })
  app.get("/expenses", (req, res) => {
    /* */
  })


  //app.listen(3000, () => console.log("Server ready"))