const express = require("express");


//addContact
// getContacts
// getContact
// deleteContact
// updateContact

const getContacts = (req, res) => {
    try {
        res.status(200).json({ message: "This is the route to get all contacts" });
    } 
    catch (error) {
        res.status(400).json({message : "Error fetching all contacts" + error.message})
    }
}
  
module.exports = { getContacts }
