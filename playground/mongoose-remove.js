const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


Todo.findByIdAndRemove('5a664b457817dc3e384f57c5').then((todo) => {
	console.log(todo);
});