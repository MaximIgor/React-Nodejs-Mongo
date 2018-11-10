const jwt = require('jsonwebtoken');

module.exports = function(app,MongoClient,url,database) {

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
// autenticate

app.post('/api/authenticate', function(req, res) {

	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
		if (err) throw err;
		var dbo = db.db("beduplayer");
		dbo.collection("user").findOne({username:req.body.username},
		function(err, result) {
		  if (err) throw err;
		  console.log(result)
			if(!result){
				res.send({msg : "Error_001"})
			}else if (result){
				// REVISAR PASSWORD
				if(result.password != req.body.password){
					res.send({msg : "Error_002"})
				}else{
				// GENERAR TOKEN
							
				var payload = {
					admin: result
				}
				var token = jwt.sign(payload, 'superSecret', {
					expiresIn: 86400 // expires in 24 hours
				});
				// REGRESA ROKEN ,STATUS y USUARIO 
				res.json({
					success: true,
					token: token,
					username:req.body.username
				})
			}
		}
		  db.close();
		});
	  });
});


//REGISTER A NEW USER
app.post('/api/register', function (req, res) {

	console.log(req.body);

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;
			let dbo = db.db("beduplayer");
			dbo.collection("user").insertOne(req.body, function(err,result){
					if (err) throw err;
					console.log("1 document inserted");
					console.log(result);

					var payload = {
						admin: result
					}
					var token = jwt.sign(payload, 'superSecret', {
						expiresIn: 86400 // expires in 24 hours
					});
					// REGRESA ROKEN ,STATUS y USUARIO 
					res.json({
						success: true,
						token: token,
						username:req.body.username
					})
			});
				db.close();
	});  
});

//validador de Token

app.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];
	console.log(token);

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, 'superSecret', function(err, decoded) {			
			if (err) {

				if(token == 'REQUESTGUESTUSER'){
					next();
				} else {
					return res.json({ success: false, message: 'Failed to authenticate token.' });		
				}
			
			} else {
				req.decoded = decoded;	
				next();
			}
		});
	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});


	//RETURNS VIDEOS FOR THE "TODAYS SELECTION" SECTION
app.get('/api/getVids', function (req, res) {

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(database.name);
			dbo.collection('film').find({}).limit(6).toArray(function(err, docs) {
					if (err) throw err;
					res.send(docs)
			})
			db.close()
	})
})

	//RETURNS 12 VIDEOS FOR HOME PAGE SECTION
app.get('/api/getHomeVids', function (req, res) {

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
		if (err) throw err;

		let dbo = db.db(database.name);
		dbo.collection('film').find({}).limit(12).toArray(function(err, docs) {
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

			let dbo = db.db(database.name);
			dbo.collection('film').findOne({id: req.body.id}), function (err, result) {
				console.log('hola')
      }

      if (err) throw err;
					res.send(docs)
			})
			db.close()
})

/*******DELETE BEFORE PRODUCTION*******/
//RETURNS ALL USERS IN DB
app.get('/api/getUsers', function (req, res) {

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(database.name);
			dbo.collection('user').find({}).toArray(function(err, docs) {
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

			let dbo = db.db(database.name);
			dbo.collection('film').find({nomClip: query}).toArray(function(err, docs) {
					if (err) throw err;
					res.send(docs)
			})
			db.close()
	})
})


//LOGIN USER
/***NOTE: ENDPOINT EXPECTS KEY VALUE PAIRS {email: myemail@me.com} IN THE BODY OF REQUEST */
app.post('/api/login', function (req, res) {

	let user = false;

	MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
			if (err) throw err;

			let dbo = db.db(database.name);
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

			let dbo = db.db(database.name);
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