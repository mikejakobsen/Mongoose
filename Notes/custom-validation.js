// Custom validation - method signature = validation(obj, [ErrorMsg])

var sizeValidator = [
    function (val) {
        return (val.length > 0 && val.length <= 50)
        // Lenght is more then 0 and less than or equal to 50
        // Mere end 0, mindre eller det samme som 50
    },
    // Custom error text
    'String must be between 1 and 50 characters long' ];
var personSchema = new Schema({
    firstName: { type: String, required: true, validate: sizeValidator },
    lastName:  { type: String, required: true, validate: sizeValidator },
    status:    { type: String, required: true, default: 'Alive' },
});

// Build a model from the person schema
var Person = new.mongoose.model.('Person', personSchema);

// New document instance of a person model
var newPerson = new Person( { firstNAme: 'John', lastName: 'Doe'} );

// Save the document - Validation (required) is instanciated now
newPerson.save(function (err) {
    if (err) return handleError(err);
    // Saved the person
});
