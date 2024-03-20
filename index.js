const express = require("express");
const app = express();
app.use(express.json());
const vehicle = require("./server/api/vehicle/index")
const { Sequelize } = require('sequelize');
const config = require('./server/config/config.json'); // Assuming your config file is named config.js
const cors = require('cors');
// Initialize Sequelize with your config object
const sequelize = new Sequelize(config.development);
console.log("//////////////////////////////////////////////")
app.use(cors());
app.use("/vehicle", vehicle);
// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()
app.listen(3071, () => {
    console.log( `running on port 3071`);
})