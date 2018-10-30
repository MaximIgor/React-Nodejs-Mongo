
module.exports = function(app,MongoClient,url) {

	// api ---------------------------------------------------------------------

	app.get('/api/test', function(req, res) {

		MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
			if (err) throw err;
			var dbo = db.db("beduplayer");
			dbo.collection("user").findOne({}, function(err, result) {
			  if (err) throw err;
			  res.send(result)
			  db.close();
			});
		  });
	});

	//RETURNS VIDEOS FOR THE "TODAYS SELECTION" SECTION
app.get('/api/getVids', function (req, res) {

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection('film').find({}).limit(6).toArray(function(err, docs) {
					if (err) throw err;
					res.send(docs)
			})
			db.close()
	})
})

//RETURNS SINGLE VIDEO FROM ID
app.get('/api/vid/:id', function (req, res) {

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection('film').find({}).limit(6).toArray(function(err, docs) {
					if (err) throw err;
					res.send(docs)
			})
			db.close()
	})
})


/*******DELETE BEFORE PRODUCTION*******/
//RETURNS ALL USERS IN DB
app.get('/api/getUsers', function (req, res) {

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection('user').find({}).limit(6).toArray(function(err, docs) {
					if (err) throw err;
					res.send(docs)
			})
			db.close()
	})
})

//SEARCHES A SPECIFIC VIDEO
/***NOTE: ENDPOINT EXPECTS KEY VALUE PAIR {search: video2search} IN THE BODY OF REQUEST */
app.post('/api/search', function (req, res) {

	if (!req.body.search) res.send("search fiel is empty, please try again.");

	let query = new RegExp(req.body.search);
	console.log(query);

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection('film').find({nomClip: query}).toArray(function(err, docs) {
					if (err) throw err;
					res.send(docs)
			})
			db.close()
	})
})

//REGISTER A NEW USER
/***NOTE: ENDPOINT EXPECTS KEY VALUE PAIRS {email: myemail@me.com} IN THE BODY OF REQUEST */
app.post('/api/register', function (req, res) {
	
	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection("user").insertOne(req.body, function(err,res){
					if (err) throw err;
					console.log("1 document inserted");
			});
			res.send('User added to the database successfully');
			db.close();
	});  
});

//LOGIN USER
/***NOTE: ENDPOINT EXPECTS KEY VALUE PAIRS {email: myemail@me.com} IN THE BODY OF REQUEST */
app.post('/api/login', function (req, res) {

	let user = false;

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection('user').findOne({username: req.body.username}, function(err, result) {
					if (err) throw "incorrect username/password";

					if (result.psw == req.body.psw){
							user = true;
							res.send(`${user} logged in correctly`);
					}
					else
							res.send('incorrect username/password, please try again.');
				});
				db.close();
	});
});

//UPLOAD A NEW VIDEO
/***NOTE: ENDPOINT EXPECTS KEY VALUE PAIRS {nomClib: myvid} IN THE BODY OF REQUEST */
app.post('/api/uploadVid', function (req, res) {
	
	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(dbName);
			dbo.collection("film").insertOne(req.body, function(err,res){
					if (err) throw err;
					console.log("1 document inserted");
			});
			res.send('Video was successfully uploaded.');
			db.close();
	});
});

	// 404 -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.send('ERROR NO TIENES ACCESO'); 
	});
};