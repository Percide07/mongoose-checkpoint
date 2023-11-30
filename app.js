const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4500;
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');

//connect to DB
dbConnect();
// Create Many Records with model.create():

