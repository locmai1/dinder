const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const dbURI =
  "mongodb+srv://dinder:dinder@cluster0.nq5tg7n.mongodb.net/dinder?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dinder's backend!" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
