//
// required modules
//
const express        = require("express");
const exphbs         = require("express-handlebars");
const path           = require("path");
const methodOverride = require("method-override");
const bodyParser     = require("body-parser");

const app  = express();
const PORT = process.env.PORT || 3000;
//
// set up views
// Set public directory
//
const directory_public = path.join(__dirname, "public");
app.use(express.static(directory_public));
//
// Set up Express to handle data
//
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": false}));
//
// Set handlebars main
//
app.engine("handlebars", exphbs({"defaultLayout": "main"}));
app.set("view engine", "handlebars");
//
// set up controller
//
// Override POST methods to handle PATCH and DELETE
app.use(methodOverride("_method"));
//
// Set controllers directory
//
const directory_controllers = path.join(__dirname, "controllers");
//
// burger controller
//
app.use("/", require(
    path.join(directory_controllers, "burger_controller.js"))
);
//
// start the listener in port 3000
//
app.listen(PORT, () => console.log(`Server listening on ${PORT}.`));