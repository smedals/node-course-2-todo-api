//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to database');
	}
	console.log('Connected to database');

	// db.collection("Todos").find({ 
	// 		_id: new ObjectID('5a624d85de32d551b427ca01')
	// 	}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	console.log("unable to fetch todos",err);
	// });

	// db.collection("Todos").find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log("unable to fetch todos",err);
	// });

	db.collection("Users").find({
		name: "Steve"
	}).toArray().then((docs) => {
		console.log('Users with name Steve:');
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('unable to fetch users',err);
	})
//	db.close();
});