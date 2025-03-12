const express = require("express");
const router = express.Router();

// DB Connection
const db = require("../../db/connection");

// GET all clients
router.get("/", (req, res) => {
  const query = "SELECT * FROM clients";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});
// GET one clients
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM clients WHERE  clientID = ?`;
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
  const { name, email } = req.body;
  const query = "INSERT INTO clients (name, email) VALUES (?, ?)";
  db.query(query, [name, email], (err, result) => {
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
  const { name, email } = req.body;
  const query = "UPDATE clients SET name = ?, email = ? WHERE clientID = ?";
  db.query(query, [name, email, id], (err, result) => {
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
  const query = "DELETE FROM clients WHERE id = ?";
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
