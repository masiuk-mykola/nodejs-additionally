require("dotenv").config();

const {
  PORT = 3000,
  DB_HOST = "mongodb+srv://blended-1:blended-1@cluster0.h7wya6h.mongodb.net/bl-1",
} = process.env;

module.exports = { PORT, DB_HOST };
