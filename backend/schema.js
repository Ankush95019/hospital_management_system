const mongoose = require("mongoose");
const PatientsSchema = new mongoose.Schema({
  fullname: {
    type:String,
    required: true
  },
  mobilenumber: { type: Number},
  email: [String],
  appointmentdate: {type: String},
  area: {type: String},
  city: {type: String},
  state: {type: String},
  postalcode: {type: Number},
});
module.exports = mongoose.model("Patients_Data", PatientsSchema);
