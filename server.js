// mongo connection (First step)
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const routes = require("./routes");

const express = require("express");
const backend = express();
 
backend.use(express.json())

// CORS (Second step) 2
backend.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
// routing 3
backend.use(routes);

// mongoose connect 1
mongoose.connect("mongodb+srv://harishpatoe:Harish153@cluster0.pjyhn.mongodb.net/")
.then(() =>
  console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`)
)
.then(() => {
  const PORT = 3000;
  backend.listen(PORT, () => {
    console.log(
      `${chalk.green("✓")} ${chalk.blue(
        "Server Started on port"
      )} ${chalk.bgMagenta.white(PORT)}`
    );
  });
})
.catch((err) => console.log(err));
