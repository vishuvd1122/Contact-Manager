const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL;



const connectDb = async () => {
  try {
    const connect = await mongoose.connect(mongoUrl);
    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (err) {console.log("Database connection ERROR:", err);
  }
};


module.exports = {connectDb}