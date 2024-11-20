const chat = require("../controllers/chat.controller")
const router = require("express").Router()
router
    .post("/send", chat.sendMessage)
    .get("/contacts", chat.contacts)
    .post("/create-group", chat.createGroup)
    .get("/:id", chat.getMessages)
    .post("/create-contact", chat.createContact)
    .put("/update-seen/:reciver", chat.updateSeen)

module.exports = router