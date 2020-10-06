const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

console.log('NODE WORKING');

app.listen(3000, function () {
    console.log('LISTENING ON 3000');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const mongoString = 'mongodb+srv://aconde:BDMongoAtlas@cluster0.vo3xv.mongodb.net/backlog?retryWrites=true&w=majority';
MongoClient.connect(mongoString, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to Database');
    const db = client.db('backlog');
    const gamesCollection = db.collection('backlog');
    app.get('/api/x', (req, res) => {
        // TODO GET
    });
    app.post('/api/x', (req, res) => {
        // TODO POST
    });
});