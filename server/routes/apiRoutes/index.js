const express = require("express");
const router = express.Router();
const Client = require("./clients");

// EXAMPLE ->   router.use(require('./route_name', route_file))
router.use("/clients", Client);

module.exports = router;
