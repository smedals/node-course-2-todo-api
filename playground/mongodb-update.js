//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to database');
	}
	console.log('Connected to database');

	//findOneAndUpdate
	// db.collection("Todos").findOneAndUpdate({
	// 	_id: new ObjectID('5a625a0ae4deaf3a9c66bb28')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndUpdate({
		_id: new ObjectID('5a624f7c99bc904e48515757')
	}, {
		$set: {
			name: 'Steve'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

//	db.close();
});