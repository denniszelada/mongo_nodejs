var MongoClient = require('mongodb').MongoClient;

// Open the connection to the server
MongoClient.connnect('mongodb://localhost:27017/test', function(err, db) {
    if (err) throw err;

    //Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {
	if (err) throw err;

	//Print the result
	console.dir(doc);

	//Close the db
	db.close();
    });

    //Declare success
    cosole.dir("Called findOne!");
});
