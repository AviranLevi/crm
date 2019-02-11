const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const Client = require('./server/models/Clients')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
    process.env.CONNECTION_STRING || 'mongodb://localhost/crm-clients',
    { useNewUrlParser: true }
).then(() => console.log("DB Connected"))

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/clients', (req, res) => {
    Client.find({}, function (err, result) { res.send(result) })
});

app.put('/clients/:id', function (req, res) {
    let dataTochange = req.body
    let id = req.params.id

    Client.findByIdAndUpdate(id, { $set: dataTochange }, { new: true },
        function (err, user) {
            if (err) return handleError(err);
            res.send(user);
        })
})

app.post('/actions', (req, res) => {
    let newClient = new Client({
        name: req.body.name,
        surname: req.body.surname,
        country: req.body.country,
        owner: req.body.owner
    })

    newClient.save()
    res.send(newClient)
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 3009;
app.listen(process.env.PORT || PORT);
