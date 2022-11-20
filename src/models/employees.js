const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const { Schema, model } = require("mongoose");

const emplSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    unique: true,
    required: true,
  },
  position: {
    type: String,
    unique: true,
    default: "newcomer",
  },
  salary: {
    type: Number,
    index: true,
    default: 0,
  },
});

const createEmployee = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  position: Joi.string().default("newcomer"),
  salary: Joi.number().default(0),
});

const updateEmployee = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  position: Joi.string().default("newcomer"),
  salary: Joi.number().default(0),
}).min(1);

const updatePosAndSalEmployee = Joi.object({
  position: Joi.string().required(),
  salary: Joi.number().required(),
});

const employeeId = Joi.object({
  id: Joi.objectId().required(),
});

const Employee = model("employee", emplSchema);

const schemas = {
  createEmployee,
  updateEmployee,
  updatePosAndSalEmployee,
  employeeId,
};

module.exports = { Employee, schemas };
