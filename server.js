const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(db.url, {
    useNewUrlParser: true
}, (err, database) => {
    if (err) return console.log(err)
    const db = database.db("tempandhumcluster")
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})
