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
