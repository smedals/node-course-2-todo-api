//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to database');
	}
	console.log('Connected to database');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		console.log("unable to insert todo",err);
	// 	} else {
	// 		console.log(JSON.stringify(result.ops, undefined, 2));
	// 	}
	// });

	// db.collection("Users").insertOne({
	// 	name: 'Steve',
	// 	age: 50,
	// 	location: 'Richardson'
	// }, (err,result) => {
	// 	if (err) {
	// 		console.log("sumthin f'd up",err);
	// 	} else {
	// 		result.ops[0]._id
	// 		console.log(result.ops[0]._id.getTimestamp());
	// 	}
	// });

	db.close();
});