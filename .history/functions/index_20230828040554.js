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
// Listen Command
exports.app