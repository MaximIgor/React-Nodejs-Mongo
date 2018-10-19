const express = require('express')
const bodyParser = require('body-parser')
const app     = express();
const port    = 3000;

const path    = require('path'); //may not be required on production


// MONGODB
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://admin:admin12@ds045557.mlab.com:45557/beduplayer';
const dbName = 'beduplayer';

//Cuando se envía un REST lleva un header y un body
//toods los paquetes tienen un cuerpo y un header, y para que
//convierta los requests a json

//Usar body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


//Método de render por default
// app.get('/', function (req, res) {
//     res.send("welcome home");
// });
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.get('/api/getVids', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
        if (err) throw err;

        let dbo = db.db(dbName);
        dbo.collection('film').find({}).limit(5).toArray(function(err, docs) {
            if (err) throw err;
            res.send(docs)
        })

        db.close()
    })

    // res.send('Get method on Mongo.')
})


app.post('/api/register', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
        if (err) throw err;

        let dbo = db.db(dbName);
        dbo.collection("user").insertOne(req.body, function(err,res){
            if (err) throw err;
            console.log("1 document inserted");
        });
        db.close();
    });

    res.send('Usuario ingreso correctamente');
    // res.send(req.body);
});

app.post('/api/login', function (req, res) {

    let user = false;

    MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
        if (err) throw err;

        let dbo = db.db(dbName);
        dbo.collection('user').findOne({username: req.body.username}, function(err, result) {
            if (err) throw "incorrect username/password";

            if (result.psw == req.body.psw){
                user = true;
                res.send(`this is user: ${user}`);
            }
            else
                res.send('incorrect username/password, please try again.');
          });
          db.close();
    });
});

app.post('/api/uploadVid', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function (err,db) {
        if (err) throw err;

        let dbo = db.db(dbName);
        dbo.collection("film").insertOne(req.body, function(err,res){
            if (err) throw err;
            console.log("1 document inserted");
        });
        db.close();
    });

    res.send('Usuario ingreso correctamente');
    // res.send(req.body);
});



app.listen(port, function () {
    console.log(`Listening to port: ${port}.`)
})