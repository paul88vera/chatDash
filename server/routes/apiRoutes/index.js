const express = require("express");
const router = express.Router();
const Client = require("./clients");
const Company = require("./company");
const Request = require("./requests");

// EXAMPLE ->   router.use(require('./route_name', route_file))
router.use("/clients", Client);
router.use("/company", Company);
router.use("/requests", Request);

module.exports = router;
