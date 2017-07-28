var express = require("express");

var app = express();
app.set("view engine","jade");
app.use("/src",express.static('src'));

app.get("/",function(req,res) {
    res.render("index");
});


app.listen(8080);
