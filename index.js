const express = require("express");
const app = express();
const bcrypt = require('bcrypt'); // For password hashing and comparison
const jwt = require('jsonwebtoken'); 
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());//req.body
//import router file
const personrouter=require('./routes/personrouter');
const menurouter=require('./routes/menurouter');
const signuprouter=require('./routes/acountrouter');
//use the routers
app.use('/person',personrouter);
app.use('/menu',menurouter);
app.use('/account',signuprouter);

app.listen(3000, () => {
  console.log("your aap is runing port number");
});
