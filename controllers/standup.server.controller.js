var Standup = require('../models/standup.server.model.js');

exports.list = function(req, res) {
    var query = Standup.find();

    query.sort({ createdOn: 'desc' })
        .limit(12)
        .exec(function(err, results) {
            //res.send(results);
            res.render('index', { title: 'Standup - List', notes: results });
            // Results is used in the Index page loop
            // {% for note in notes %}
        });
};

exports.filterByMember = function(req, res) {
    var query = Standup.find();
    // Select membername from the query
    var filter = req.body.memberName;

    // Sort by CreatedOn descending
    query.sort({ createdOn: 'desc' });

    if (filter.length > 0)
    {
        query.where({ memberName: filter})
    }

    query.exec(function(err, results) {
        res.render('index', { title: 'Standup - List', notes: results });
    });
};


exports.create = function(req, res) {
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    entry.save();

    // Redirect to the home page...
    res.redirect(301, '/');
};

exports.getNote = function(req, res) {
    res.render('newnote', { title: 'Standup - New Note' });
};
