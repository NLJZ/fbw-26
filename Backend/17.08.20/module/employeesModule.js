const mongoose = require("mongooese");
const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: String,
  employeeAddedDate: {
    type: String,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("employeesData", employeesDataSchema);
