const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userName: { type: String },
  email: {
    type: String,
    required: [true, "discription is mendatory!"],
    // enum: ["ifran", "ibrar", "meesum"],
  },
  password: { type: String,  },
  id:{
    type:String,
    required:true
  },
  spa:{
    type:String,
    required:true
  }
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
