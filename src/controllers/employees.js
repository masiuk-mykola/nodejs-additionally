const {
  getEmloyees,
  getEmloyeeByID,
  addEmployee,
  updateEmployee,
  updatePartEmployee,
  deleteEmployee,
} = require("../services/employees");

const getAllEmployeesCtrl = async (req, res) => {
  const data = await getEmloyees();
  res.status(200).json({ data });
};

const getEmloyeeByIdCtrl = async (req, res) => {
  const { id } = req.params;
  const data = await getEmloyeeByID(id);
  data
    ? res.status(200).json({ data })
    : res.status(404).json({ message: "Not found" });
};

const addEmployeeCtrl = async (req, res) => {
  const data = await addEmployee(req.body);
  res.status(201).json({ data });
};

const updateEmployeeCtrl = async (req, res) => {
  const { id } = req.params;
  const data = await updateEmployee(id, req.body);
  data
    ? res.status(200).json({ data })
    : res.status(404).json({ message: "Not found" });
};

const updatePositionAndSalaryEmployeeCtrl = async (req, res) => {
  const { id } = req.params;
  const data = await updatePartEmployee(id, req.body);
  data
    ? res.status(200).json({ data })
    : res.status(404).json({ message: "Not found" });
};

const deleteEmployeeCtrl = async (req, res) => {
  const { id } = req.params;
  const data = await deleteEmployee(id);
  data
    ? res.status(200).json({ data })
    : res.status(404).json({ message: "Not found" });
};

module.exports = {
  getAllEmployeesCtrl,
  getEmloyeeByIdCtrl,
  addEmployeeCtrl,
  updateEmployeeCtrl,
  updatePositionAndSalaryEmployeeCtrl,
  deleteEmployeeCtrl,
};
