// Middleware flow

var personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    status: { type: String, required: true, default: 'Alive' }
});
// If no value is applied, the default is 'Alive'

// Build a model from the person schema
var Person = new.mongoose.model.('Person', personSchema);

// New document instance of a person model
var newPerson = new Person( { firstNAme: 'John', lastName: 'Doe'} );

// Save the document - Validation (required) is instanciated now
newPerson.save(function (err) {
    if (err) return handleError(err);
    // Saved the person
});
