var express = require('express');
var app = express();

//Template Engine
app.set('view engine', 'jade');
app.set('view options', { layout: true} );
app.set('views', __dirname + '/views');



// Rotas - INICIO
app.get('/stooges/:name?', function(req, res, next) {
	var name = req.params.name;

	switch( name ? name.toLowerCase() : '' ) {

		case 'larry': 
		case 'curly': 
		case 'moe': 
			res.render('stooges', {stooge: name} );
			res.send(name + ' is my favorite stooge.');
			break;
		default:
			next();

	}
});

app.get('/stooges/*?', function(req, res) {
	res.send('no stooges listed');
});

app.get('/?', function(req, res) {
	res.send('Hello World');
});
// Rotas - FIM

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port );
