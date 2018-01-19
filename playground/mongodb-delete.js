//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to database');
	}
	console.log('Connected to database');

	// // deleteMany
	// db.collection('Users').deleteMany({name: 'Steve'}).then((result) => {
	// 	console.log(result);
	// })

	// deleteOne
	// db.collection("Todos").deleteOne({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	//findOneAndDelete
	db.collection("Users").findOneAndDelete({_id: new ObjectID('5a62508bbbb4213da06be079')}).then((result) => {
		console.log(result);
	})

//	db.close();
});