var Standup = require('../models/standup.server.model.js');

// No callback - No Conditions

var query = Standup.findOne();
query.exec(function (err, results) {
    // handle the error - or the result
});

// Calling the exec function on the query - prints the result


// With conditions..

var query = Standup.findOne({ MemberName: 'Mark'});

