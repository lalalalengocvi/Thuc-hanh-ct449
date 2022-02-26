const express = require("express");
const { route } = require("express/lib/application");
//const contacts = require("../controllers/contact.controller");

const ContactController = require("../controllers/contact.controller");

module.exports = app => {
    const router = express.Router();
    const contact = new ContactController();

    router.post("/", contacts.create);

    router.get("/", contacts.findAll);
    
    router.get("/:id", contacts.findOne);

    router.put("/:id", contacts.update);

    router.delete(":/id", contacts.delete);
    
    router.delete("/", contacts.deleteAll);

    app.use("/api/contacts", router);

};