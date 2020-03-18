const express = require("express");
const exphbs = require('express-handlebars')
const routes = require("./controllers/burgers_controller.js");
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use('/', express.static(__dirname, + "public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});