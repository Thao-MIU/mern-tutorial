var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'test_db';
const client = new MongoClient(url);


/* GET home page. */
router.get('/', async function (req, res, next) {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movie');
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  client.close();
  
  res.json(findResult);
});

module.exports = router;
