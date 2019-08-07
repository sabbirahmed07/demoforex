const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");

//importing routes
const userRoutes = require("./routes/users");

app.use(cors());

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/users", userRoutes);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set status folder
  app.use(express.static("view/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
