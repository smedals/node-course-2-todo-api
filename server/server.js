var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
})

app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	},(e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req,res) => {
	var todoId = req.params.id;
	if (!ObjectID.isValid(todoId)) {
		console.log('id not valid');
		return res.status(404).send();
	}
	Todo.findById(todoId).then((todo) => {
		if (todo) {
			res.send({todo}); 
		} else {
			res.status(404).send();
		}
	}, (err) => {
		res.status(400).send();
	});
});

app.listen(3000, () => {
	console.log('started on port 3000');
})

module.exports = {app};
