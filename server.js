const express = require("express");
// const path = require("path");
// const session = require("express-session");
// // Our passport implementation
// const passport = require("./server/db/config/passport")
// PORT and Models
const PORT = process.env.PORT || 3001;
// const db = require("./server/db/db");
// const models = require("./server/db/models/")
// // Routes
// const routes = require("./server/routes");

let app = express();
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

server = app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});