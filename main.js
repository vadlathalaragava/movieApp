var express = require('express');

var app = express();

var customerList = [
{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'78787878', address:'India'},
{id:2, name:'Kamal', email:'kamal@gmail.com', phone:'9724232340', address:'Asia'}
];

var movie = [
    {id:1, name:'Twostates', year:'2019/07/08', image_url:'documents/image.jpg',  production_house:'India',rating:'5',type:'Cartoon',language:'hindi',date:'2019/07/08'},
    {id:1, name:'3Idiots', year:'2019/07/08', image_url:'documents/image.jpg',  production_house:'India',rating:'4',type:'Action',language:'hindi',date:'2019/07/08'},
    ];

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/customer', function (req, res) {
	res.send(customerList);
});

app.get('/movie', function (req, res) {
	res.send(movie);
});
 
app.get('/customer', function (req, res) {
	res.send(customerList);
});

console.log("Hello Express App");

var server = app.listen(3001, function () {
	console.log('Example app listening at 3001');
});
