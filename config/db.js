const { MongoClient, ServerApiVersion } = require('mongodb');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URL ;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = mongoose.connect(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}).then(()=>console.log("MongoDB Connected"))
.catch(err => console.log(err));

module.exports = client;