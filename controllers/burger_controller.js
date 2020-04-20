//
// Import required packages
//
const express = require("express");
const path    = require("path");
//
// Create an instance of Router
//
const router = express.Router();
//
// import burger.js
//
const burger = require(path.join(__dirname, "..", "models", "burger.js"));
//
// set up the routes
//
// route for burger id
//
router.get("/:id?", (req, res) => {
    function callback(results) {
//
// form to add burger
//
        if (!req.params.id) {
            res.render("index", {
                "title"  : "Add",
                "action" : "/",
                "id"     : undefined,
                "name"   : "",
                "burgers": results
            });
//
// form to edit burger
//
        } else {
            const id     = parseInt(req.params.id);
            const burger = results.filter(r => r.id === id)[0];

            res.render("index", {
                "title"  : "Edit",
                "action" : `/${id}/${(burger.devoured) ? "1" : "0"}?_method=PATCH`,
                "id"     : id,
                "name"   : burger.name,
                "burgers": results
            });

        }
    }

    burger.getBurgers(callback);
});
//
// route for root location
//
router.post("/", (req, res) => {
    function callback(results) {
        res.redirect("/");
    }

    burger.addBurger(req.body.name, false, callback);
});
//
// route for devoured 
//
router.patch("/:id/:devoured", (req, res) => {
    function callback(results) {
        res.redirect("/");
    }
    
    burger.updateBurger(parseInt(req.params.id), req.body.name, (req.params.devoured === "1"), callback);
});
//
// route for delete 
router.delete("/:id", (req, res) => {
    function callback(results) {
        res.redirect("/");
    }

    burger.deleteBurger(parseInt(req.params.id), callback);
});
//
// export router
//
module.exports = router;