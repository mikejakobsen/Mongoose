var Standup = require('../models/standup.server.model.js');

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
