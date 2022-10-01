const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  email: { type: String },
  userName: {
    type: String,
    required: [true, "userName is mendatory!"],
    // enum: ["ifran", "ibrar", "meesum"],
  },
  password: { type: String, required: [true, "Password is mendatory!"] },
});

const authModel = mongoose.model("auth", authSchema);

module.exports = authModel;
