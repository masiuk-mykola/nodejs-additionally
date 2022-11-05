const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/admin", (req, res, next) => {
  try {
    const err = new Error("Over error");
    err.status = 530;
    throw err;
  } catch (error) {
    next(error);
  }
});

app.use((_, res) => res.status(404).json({ message: "Not Found" }));
app.use((err, _, res, __) => {
  const { status = 500, message = "Server internal error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
