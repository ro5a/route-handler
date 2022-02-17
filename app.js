var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/about', function(req, res) { 
     res.render('about');
    });
    app.get('/', function(req, res) { 
         res.render('index');
        });
        app.get('*', function(req, res) { 
             res.render('error');
            });
            app.listen(3000);

