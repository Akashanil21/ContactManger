const router = require('express').Router();
const Contact = require('../models/contactsModel')
const jwt = require('jsonwebtoken')

// add contact

router.post("/add", async (req, res) => {
    console.log(req.body);
    try {
        const existingContact = await Contact.findOne({ number: req.body.number });
        if (existingContact) {
            return res.status(200).send({
                message: "Contact already Exists",
                success: false
            })
        }

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'test')

        req.body.userId = decoded.userId;

        const newContact = new Contact({
            ...req.body,
            user: req.body.userId
        })
        await newContact.save()
        return res.status(200).send({
            success: true,
            message: "Contact added successfully"
        })

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
})


// get contacts of specific user

router.get("/get-contacts-by-id", async (req, res) => {

    try {

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'test')

        req.body.userId = decoded.userId;

        const contacts = await Contact.find({ user: req.body.userId })
            .populate("user")
        res.status(200).send({
            message: "Contacts fetched successfully",
            data: contacts,
            success: true
        })
    } catch (error) {
        res.status(500).send({
            message: "Contacts fetch failed",
            data: error,
            success: false
        })
    }
})

// delete a contact

router.post("/delete-contact", async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.body._id, req.body);
        return res.send({
            success: true,
            message: "Contact deleted successfully"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

// update contacts

router.post("/update-contact", async (req, res) => {
    try {
        await Contact.findByIdAndUpdate(req.body._id, req.body);
        return res.status(200).send({
            success: true,
            message: "Bus updated successfully"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})



module.exports = router