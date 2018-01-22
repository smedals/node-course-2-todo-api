const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5a661ed29b8ae43e78db891011';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID is not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('id not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5a626aed075d3e4d543f11f6').then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User',user);
}).catch((e) => console.log(e));