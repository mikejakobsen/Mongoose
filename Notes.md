# Mongo Excercise

a) db.getCollection("retaurants").find({name:"Mackies"})

b) db.getCollection("retaurants").find({cuisine:"Italian", "grades.score" : {$gt : 50}}).sort({"adress.zipcode" : 1})

c) db.retaurants.update({"restaurant_id" : "55555555"}, {$push : {grades : {date : Date(), grade : "A", score : 666}}})

d) db.retaurants.remove({cuisine : "Hamburgers", "grades.score" : {$lt : 1}})

# Mongoose

A document in Mongoose is simply an instance of the model.

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
