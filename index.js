const mongoose = require("mongoose");
const app = require("./src/app");
const { PORT, DB_HOST } = require("./src/config");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running. Use our API on port: ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
