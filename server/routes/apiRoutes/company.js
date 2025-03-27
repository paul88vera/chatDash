const express = require("express");
const router = express.Router();

//EXAMPLE ->   router.use(require('./route_name'))
const db = require("../../db/connection");

// GET all companies
router.get("/", (req, res) => {
  const query = "SELECT * FROM Company";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Company");
    } else {
      res.json(results);
    }
  });
});
// GET one company by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM Company WHERE CompanyID = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// POST a new company
router.post("/", (req, res) => {
  const { name, owner, email } = req.body;
  const query =
    "INSERT INTO Company (CompanyName, CompanyOwner, CompanyEmail) VALUES (?,?,?)";
  db.query(query, [name, owner, email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.status(201).send(`Company: ${name} Added`);
    }
  });
});

// PUT (update) an existing company
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, owner, email } = req.body;
  const query =
    "UPDATE Company SET CompanyName = ?, CompanyOwner = ?, CompanyEmail = ? WHERE CompanyID = ?";
  db.query(query, [name, owner, email, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send(`Company: ${name} Updated`);
    }
  });
});

// DELETE a company
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Company WHERE CompanyID = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send("Company Deleted");
    }
  });
});

module.exports = router;
