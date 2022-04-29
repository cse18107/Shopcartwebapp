const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB)
    .then((data) => {
      console.log(`Database connected successfully ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports=connectDatabase;
