var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    PORT = process.env.PORT || 3030;

app.use(bodyParser.json());

app.use(express.static("./public"));

app.use(function(req,res){
var result = {};
result.status = true;
result.message = "successfully retrieve details";
res.send(result);
});

app.listen(PORT,function(err){
if(!err)
console.log("Application is listening to port ",PORT);
else
console.log("port %s finding some issue please try again:",PORT);
});
