# Mongo Excercise

a) db.getCollection("retaurants").find({name:"Mackies"})

b) db.getCollection("retaurants").find({cuisine:"Italian", "grades.score" : {$gt : 50}}).sort({"adress.zipcode" : 1})

c) db.retaurants.update({"restaurant_id" : "55555555"}, {$push : {grades : {date : Date(), grade : "A", score : 666}}})

d) db.retaurants.remove({cuisine : "Hamburgers", "grades.score" : {$lt : 1}})

# Mongoose

```
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
```
First Mongoose is required to the Mongoose variable - then the Schema objekt within mongoose.
Is saved as the Schema variable.

Read more: http://mongoosejs.com/docs/guide.html

# ODM tool

A document in Mongoose is an instance of the model.

´´
var Person = mongoose.model('Person', personSchema);

	var bob = new Person({
		firstName: 'Bob',
		lastName: 'Doe'
	});
´´

A new is then defined - Blog is the modelname - blogSchema is the defined Schema

var Blog = mongoose.model('Blog', blogSchema);
// ready to go!

´´
var mongoose = requre('mongoose');
var Schema = mongoose.Schema;

	var customerSchema = new Schema({
		name: String,
		address: String,
		city: String,
		state: String,
		country: String,
		zipCode: Number,
		createdON: Date,
		isActive: Boolean,
	})
´´

var simpleSchema = new Schema({ fieldName: SchemaType});

## Data types

| Mongoose Schema Types | Javascript Data Types |
|-----------------------|-----------------------|
| String                | String                |
| Number                | Number                |
| Date                  | Object                |
| Buffer                | Object                |
| Boolean               | Boolean               |
| Mixed                 | Object                |
| ObjecId               | Object                |
| Array                 | Array(Object)         |

# Basic Schema

```
	/* Example */

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	// child address schema...
	var addressSchema = new Schema ({
	    type: String,
	    street: String,
	    city: String,
	    state: String,
	    country: String,
	    postalCode: Number,
	});

	// parent customer schema..
	var customerSchema = new Schema ({
	    name: {
	        first: String,
	        last: String
	},
	    // Adresse Schema is defined at the top
	    address: [ addressSchema ],
	    createdOn: { type: Date, default: Date.now },
	    isActive: { type: Boolean, default: true },
});
``

# Model Example

```
	/* Model Example - to remember the syntax */

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	// Pre-define sub-documents..
	var subCategory = new Schema({
	    name: String,
	    description: String,
	    isActive: Boolean});

	var subAnswers = new Schema({
	    answerText: String,
	    isCorrect: Boolean,
	    displayOrder: Number});

	var subQuestions = new Schema({
	    type: { type: String},
	    text: String,
	    answers: [ subAnswers ] });

	// Define main document schema..
	var quizSchema = new Schema({
	    name: String,
	    description: String,
	    categories: [ subCategory ], 
	    questions: [ subQuestions ] 
	});
```

# Query

## Find

```
	// No callback - Deferrd execution
	var query = Standup.find();

	// With callback - Executes query immediately
	Standup.find(function (err, results) {
	    // handle the error - or the results here
	});


	// With callback - Executes query immediately
	// Select * from Standup where MamberName = 'David'

	Standup.find({ MamberName: 'David'}, function (err, results) {
	    // handle the error - or the results here
	};

	    // Select * from Standup where MamberName = 'David'
	    // Only return row MamberName and impediment
	    Standup.find({ MamberName: 'David'}, 'MemberName impediment',
	        function (err, results) {
	            // handle the error - or the results here
};
```
## Find One

```
	// No callback - No Conditions

	var query = Standup.findOne();
	query.exec(function (err, results) {
	    // handle the error - or the result
	});

	// Calling the exec function on the query - prints the result


	// With conditions..

	var query = Standup.findOne({ MemberName: 'Mark'});

```

## Find By Id

```
	// Search parameter saved as a variable
	var id = '57e8f6e755ce973a83e1ef55';
	var Standup = require('../models/standup.server.model.js');

	// By id - No conditions
	// Takes the previous defined ID variable as a parameter

	var query = Standup.findById(id);
	query.exec(function (err, doc) {
	    // Error or the result
	});

	// Chained method calls version
	Standup.findById(id).exec(function (err, results) { .... });

	// By id.. - Every field except 'impediment'
	var query = Standup.findById(id, '-impediment');
```


