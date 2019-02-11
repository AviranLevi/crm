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