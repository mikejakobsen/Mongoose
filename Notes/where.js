// WTF is this syntax?
Customer.find({discount: {$gte: 10, $lt: 20}, function(err, results) {
    if (err) throw err;
    console.log(results);
});

Customer.where('discount').gte(10).lt(20).exec(function(err, results) {
    if (err) throw err;
    console.log(results);
});


// Chain where methods together
// Where discount is greather then 10 and less then 20 - and zipCode is 12345
Customer.where('discount').gte(10).lt(20)
        .where('zipCode', '12345')
        .exec(function(err, results) {
            if (err) throw err;
            console.log(results);
        });
