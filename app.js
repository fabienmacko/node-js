const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postsRoute = require("./routes/posts");

require("dotenv/config");

// Middlewares in express

// Allow all
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use("/posts", postsRoute);


// ROUTES

app.get("/", (req, res) => {
  res.send("We are on home");
})

// Connect to db 
mongoose.connect("mongodb://localhost/portfoliov2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to portfoliov2");
});

// How to listen on the server
app.listen(3001);