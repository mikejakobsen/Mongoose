// required validation example
// Name should be a Sting, and is required
var customerSchema = new Schema({
    name:       { type: String, required: true},
    address:    String,
    city:       String,
    state:      String,
    country:    String,
    zipCode:    number,
    createdOn:  Date,
    isActive:   Boolean,
});

// After the schema is defined
customerSchema.path('city').required(true, 'Ingen by');
// The path is the field name.

/* Regular Expresion */

var reMatch = /[a-zA-Z]/;
var customerSchema = new Schema({
    name: {type: String,
            required: true;
            match: reMatch },
});

// Defining a regex as the reMatch, then applying it as a match parameter.

/* Enum validation */

// String - enum validation - should match within the array
var array = ['none', 'minor', 'blocking', 'severe'];

var standupSchema = new Schema ({
    impediments: { type: String,
                    required: true,
                    enum: array }
});


// Customer must receive at least a 5% discount
var customerSchema = new Schema({
    name: String
    discount: { type: Number, min: 5 }
});

// At least 60%
var customerSchema = new Schema({
    name: String
    discount: { type: Number, max: 60 }
});
