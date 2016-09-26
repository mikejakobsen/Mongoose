// Find by id - Id parameter
// Then updating the found object

Standup.findById(id).exec(function (err, doc) {
    // handle any errors
    if (err) return errorHandler(err);

    // Update the found document - impediment field
    doc.impediment('None');
    doc.save(function (err) {
        if (err) return errorHandler(err);
        console.log('This shit was updated');
    });
)};

// Best practice
// Specity the query condition
// And then the updated info

var condition = { memberName: 'Mary' };
var update = { impediment: 'None - some shit' };

Standup.update(condition, update, function(err, numberAffected, rawResponse) {
    // Error or result - same old
});

// Finding a document - then updating it.
Standup.findOne({ memberName: 'Mary'}, function(err, doc) {
    // Handle errors here - Validate document results
    doc.impediment = 'None - Updated the impediment object';
    doc.save(function (err) {
        // Handle Errors
    });
});

