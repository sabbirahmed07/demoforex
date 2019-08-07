const app = require("./app");
const mongoose = require("mongoose");
const { DB_URL } = require("./configuration/index");

//Start the server
const port = process.env.PORT || 5000;
mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(result => {
    app.listen(port);
    console.log("Server and Database are connected");
  })
  .catch(error => {
    console.log(error);
  });
