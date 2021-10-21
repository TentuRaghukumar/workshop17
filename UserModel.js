const mongoose = require("mongoose");

//User Model For Database
const user = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  mobile_no: String,
  confirm_password: String,
});


module.exports = mongoose.model("User", user);
