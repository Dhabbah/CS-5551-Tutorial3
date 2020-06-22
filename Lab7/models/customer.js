var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  customerID: String,
  customerFirstName: String,
  customerLastName: String,
  customerEmail: String,
  customerPhoneNumber: String,
  updated_date: {type: Date, default: Date.now},
});

const Customer = mongoose.model('Customers',CustomerSchema);
module.exports = Customer;
