const express = require("express");
const router = express.Router();

// DB Connection
const db = require("../../db/connection");

// GET all clients
router.get("/", (req, res) => {
  const query = "SELECT * FROM Clients";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Clients");
    } else {
      res.json(results);
    }
  });
});
// GET one clients
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM Clients WHERE ClientID = ?`;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// POST a new client
router.post("/", (req, res) => {
  const { first, last, email, id } = req.body;
  const query =
    "INSERT INTO Clients (FirstName, LastName, ClientEmail, CompanyID) VALUES (?, ?, ?, ?)";
  db.query(query, [first, last, email, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.status(201).send("Client added");
    }
  });
});

// PUT (update) a client
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { first, last, email } = req.body;
  const query =
    "UPDATE Clients SET FirstName = ?, LastName = ?, ClientEmail = ? WHERE ClientID = ?";
  db.query(query, [first, last, email, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send("Client updated");
    }
  });
});

// DELETE a client
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Clients WHERE ClientID = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send("Client deleted");
    }
  });
});

module.exports = router;
