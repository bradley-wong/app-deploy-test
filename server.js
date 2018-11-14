const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));

app.use((request, response, next) => {
	response.render('maint.hbs', {
		time: new Date()
	});
	// var time = new Date().toString();
	// console.log(`${time}: ${request.method} ${request.url}`);
	// fs.appendFile('server.log', log + '\n', (error) => {
	// 	if (error) {
	// 		console.log('Unable to log message');
	// 	}
	// });
	// next();
});

app.get('/', (request, response) => {
	// response.send('<h1>Hello Express!</h1>');
	response.send({
		name: 'Your Name',
		school: [
			'BCIT',
			'SFU',
			'UBC'
		]
	})
});

app.get('/info', (request, response) => {
	response.render('about.hbs', {
		title: 'About page',
		welcome: 'Hello!'
	});
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(8080, () => {
	console.log('Server is up on the port 8080');
});

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('message', (text) => {
	return text.toUpperCase();
});