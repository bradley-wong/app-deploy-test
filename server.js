const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((request, response, next) => {
	response.render('maint.hbs', {
		maintMsg: 'The site is currently down for maintenance',
		time: new Date(),
		admin: 'Contact Bradley if you have any questions'
	});
});

app.get('/', (request, response) => {
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

app.listen(port, () => {
	console.log('Server is up on the port 8080');
});

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('message', (text) => {
	return text.toUpperCase();
});