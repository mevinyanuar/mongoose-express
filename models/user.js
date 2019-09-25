const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    phoneNumber: String,
    addreses:[{
      type: Schema.Types.ObjectId,
      ref: "address"
    }
      ]
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
