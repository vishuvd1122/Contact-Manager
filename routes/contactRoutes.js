const express = require("express");
const router = express.Router()
const {getContacts} = require("../controllers/contactController")


router.get("/",getContacts)
// router.get("/:id",getContact)
// router.post("/",addContact)
// router.delete("/:id",deleteContact)
// router.put("/:id",updateContact)


module.exports = router