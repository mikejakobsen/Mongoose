
![alt tag](http://www.mikejakobsen.com/mike.png)

# mikejakobsen.com

Learning Mongoose.

http://mongoosejs.com

```
	npm install

	npm start

	http://localhost:3000
```

## Basic Syntax

```
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test');

	var Cat = mongoose.model('Cat', { name: String });

	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
	  if (err) {
		console.log(err);
	  } else {
		console.log('meow');
	  }
	});
```
