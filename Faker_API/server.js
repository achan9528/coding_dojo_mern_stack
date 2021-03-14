const express = require("express");
const faker = require("faker");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User{
    constructor(){
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.internet.email();
        this.email = faker.phone.phoneNumber();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
    }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
