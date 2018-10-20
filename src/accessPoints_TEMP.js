const express = require('express')
const bodyParser = require('body-parser')
const app     = express();
const port    = 3000;


//may not be required on production
// const path    = require('path'); 


// MONGODB
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://admin:admin12@ds045557.mlab.com:45557/beduplayer';
const dbName = 'beduplayer';

//Usar body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//TURN OFF TO TRY IN PROD
        // app.get('/', function (req, res) {  
        //     res.sendFile(path.join(__dirname+'/public/index.html'));
        // })


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

//GET SIGLE VIDEO BY ID is not working!!
        // app.get('/api/search/:id', function (req, res) {
        //     res.send(req.params.id);
        // });


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

app.listen(port, function () {
    console.log(`Listening to port: ${port}.`)
})

