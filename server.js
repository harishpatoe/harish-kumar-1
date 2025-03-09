// mongo connection
const mongoose = require("mongoose");

const chalk = require("chalk");

const express = require("express");
const backend = express();

const http = require("http").Server(backend);




mongoose.connect("mongodb+srv://harishpatoe:Harish1532003@cluster0.pjyhn.mongodb.net/")
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