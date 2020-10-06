const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

app.listen(3000, function () { });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const mongoString = 'mongodb+srv://aconde:BDMongoAtlas@cluster0.vo3xv.mongodb.net/backlog?retryWrites=true&w=majority';
MongoClient.connect(mongoString, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('guestbook');
    const gBookCollection = db.collection('guestbook');
    app.get('/api/guestbook', (req, res) => {
        db.collection('guestbook').find().toArray()
            .then(results => {
                res.send(results);
            })
            .catch(error => console.error(error));
    });
    app.post('/api/guestbook', (req, res) => {
        gBookCollection.insertOne(req.body)
            .then(result => {
                res.send(true);
                console.log(req.body);
            })
            .catch(error => console.error(error));
    })
});