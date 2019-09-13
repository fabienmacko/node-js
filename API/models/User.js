const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("allUsers", PostSchema);