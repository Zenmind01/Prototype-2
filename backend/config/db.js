const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb://127.0.0.1:27017/zenmind", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .on("open", () => {
    console.log("connected to db");
  })
  .on("error", (error) => {
    console.log(error);
  });

module.exports = connection;
