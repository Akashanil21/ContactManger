const express = require("express")
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const dbConfig = require("./config/dbConfig")

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())


app.use(express.json())

const usersRoute = require('./routes/usersRoute')
const contactsRoute = require('./routes/contactsRoute')

app.use('/api/users',usersRoute)
app.use('/api/contacts',contactsRoute)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})