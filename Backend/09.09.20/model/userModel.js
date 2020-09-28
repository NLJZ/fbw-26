// Authentication part one
// name => hdzebzf37t (hash value)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  userName: {
    type: String,
    required: "Username is required.",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "Password is required.",
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
