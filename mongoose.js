const mongoose = require("mongoose");
require("dotenv").config();

//connect database (myinterviewdb) and our localhost
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("MONGO CONNECTED");
} catch {}
