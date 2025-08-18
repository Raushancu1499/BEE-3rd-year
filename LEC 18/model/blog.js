const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({

  title: String,
  body: String,
  date: Date,
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "User"  // connet it with user with ref 
  }
});
module.exports = mongoose.model('Blog', BlogPost);
