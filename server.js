const express = require("express");
const dotenv = require ("dotenv").config();
const app = express();
const {connectDb}= require("./models/db")
const contactRoutes = require("./routes/contactRoutes")


const port = process.env.PORT 



app.use("/api/contacts" ,contactRoutes )


app.listen(port, ()=>{
    connectDb();
    console.log(`Server is running on PORT ${port}`)
})

