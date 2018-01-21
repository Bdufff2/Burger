// Setup dependencies
var express = require('express');
var bodyParser = require('body-parser');




var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require('express-handlebars');

// Setup handlebars
app.engine('handlebars', exphbs({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(PORT, function(){
    console.log('App is listening on port: ' + PORT);
});
