const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const Client = require('./server/models/Clients')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
    process.env.CONNECTION_STRING || 'mongodb://localhost/crm-clients',
    { useNewUrlParser: true }
).then(() => console.log("DB Connected"))


app.use(express.static(path.join(__dirname, 'build')));


app.get('/clients', (req, res) => {
    Client.find({}, function (err, result) { res.send(result) })
});

app.get('/getData', (req, res) => {
    const data = require('./data.json')

    data.forEach(d => {
        let clients = new Client({
            name: d.name.split(" ")[0],
            surname: d.name.split(" ")[1],
            email: d.email,
            firstContact: d.firstContact,
            emailType: d.emailType,
            sold: d.sold,
            owner: d.owner,
            country: d.country
        })

        clients.save()
    })

    res.end()
})

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
