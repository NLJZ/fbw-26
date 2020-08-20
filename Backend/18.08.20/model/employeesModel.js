const mongoose = require("mongoose");
const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required. Please enter your name"],
    trim: true,
  },
  age: {
    type: Number,
    //required: true,
    required: [true, "Age is required. Please enter your age."],
  },
  add: String,
  employeeAddedDate: {
    type: Date,
    required: true,
    //unique: true,
    default: Date.now,
  },
});
// create new collection
// module.exports = mongoose.model(
//   "EmployeesData",
//   employeesDataSchema
// );
// work on collection that we have
module.exports = mongoose.model(
  "employeesData",
  employeesDataSchema,
  "employeesData"
);
