const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var adressSchema = new Schema(
  {
    address: { type: String, required: true }
    
  },
  { timestamps: true }
);

const Address = mongoose.model("address", adressSchema);


module.exports = Address;