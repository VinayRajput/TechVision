const express = require("express");
const routes = express.Router();
const driverController = require('../controllers/driver.controller');

routes.get('/getDrivers', driverController.getDrivers);
routes.get('/getDriver/:id', driverController.getDriverById);
routes.delete('/deleteDriver/:id', driverController.deleteDriver);
routes.post('/addDriver', driverController.addDriver);
routes.post('/updateDriver', driverController.updateDriver);

module.exports = routes 

