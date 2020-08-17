const express = require("express");
const router = express.Router();

const EmployeesData = require("../module/employeesModule");
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
