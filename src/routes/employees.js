const express = require("express");
const {
  getAllEmployeesCtrl,
  getEmloyeeByIdCtrl,
  addEmployeeCtrl,
  updateEmployeeCtrl,
  updatePositionAndSalaryEmployeeCtrl,
  deleteEmployeeCtrl,
} = require("../controllers/employees");
const tryCatchWrapper = require("../helpers/tryCatchWrapper");
const validator = require("../middlewares/validation");
const { schemas } = require("../models/employees");

const router = express.Router();

router.get("/", tryCatchWrapper(getAllEmployeesCtrl));

router.get(
  "/:id",
  validator.params(schemas.employeeId),
  tryCatchWrapper(getEmloyeeByIdCtrl)
);

router.post(
  "/",
  validator.body(schemas.createEmployee),
  tryCatchWrapper(addEmployeeCtrl)
);

router.patch(
  "/:id/position&salary",
  validator.params(schemas.employeeId),
  validator.body(schemas.updatePosAndSalEmployee),
  tryCatchWrapper(updateEmployeeCtrl)
);

router.delete(
  "/:id",
  validator.params(schemas.employeeId),
  tryCatchWrapper(deleteEmployeeCtrl)
);

router.put(
  "/:id",
  validator.params(schemas.employeeId),
  validator.body(schemas.updateEmployee),
  tryCatchWrapper(updatePositionAndSalaryEmployeeCtrl)
);

module.exports = router;
