const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10,(err,salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashedPassword = '$2a$10$.TkY1gGiBkUnP.RfvjY0C.2WB8KiZZEZr6DKj.Stpzz2w7Gj76/j6'

bcrypt.compare(password, hashedPassword, (err, result) => {
	console.log(result);
})

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);


// var decoded =jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);