const { Employee } = require("../models/employees");

const getEmloyees = async () => {
  const data = await Employee.find();
  return data;
};

const getEmloyeeByID = async (id) => {
  const data = await Employee.findById(id);
  return data;
};

const addEmployee = async (employee) => {
  const data = await Employee.create(employee);
  return data;
};

const updateEmployee = async (id, body) => {
  const data = await Employee.findByIdAndUpdate(id, body, { new: true });
  return data;
};

const updatePartEmployee = async (id, body) => {
  const data = await Employee.findByIdAndUpdate(id, body, { new: true });
  return data;
};

const deleteEmployee = async (id) => {
  const data = await Employee.findByIdAndRemove(id);
  return data;
};

module.exports = {
  getEmloyees,
  getEmloyeeByID,
  addEmployee,
  updateEmployee,
  updatePartEmployee,
  deleteEmployee,
};
