const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");




//  App config
const app = express()
// middelwares
app.use(cors({origin:true}))
app.use(express.json())
// api routes
app.get("/", (req,res)=>res.status(200).send("Hello World"));

app.post("/payments/create",async (req,res)=>{
  const total = req.query.total
  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:"usd",

  });
  res.status(201).send({
    clientSecret : paymentIntent.client_secret.
  })

});

// example endpoin
//  http://127.0.0.1:5001/e-clone-871f4/us-central1/api)
// Listen Command
exports.api = functions.https.onRequest(app);
