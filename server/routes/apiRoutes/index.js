const express = require("express");
const router = express.Router();
const Client = require("./clients");
const Company = require("./company");

// EXAMPLE ->   router.use(require('./route_name', route_file))
router.use("/clients", Client);
router.use("/company", Company);

module.exports = router;
