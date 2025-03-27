const express = require("express");
const router = express.Router();

// DB Connection
const db = require("../../db/connection");

// GET all requests
router.get("/", (req, res) => {
  const query = "SELECT * FROM Requests";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Requests");
    } else {
      res.json(results);
    }
  });
});

// GET all requests from a specific client by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM Requests WHERE ClientID = ?`;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// POST a new request
router.post("/", (req, res) => {
  const { details, clientId, first, last, companyId, companyName, id } =
    req.body;
  const query =
    "INSERT INTO Requests (Details, ClientID, FirstName, LastName, CompanyID, CompanyName) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [details, clientId, first, last, companyId, companyName, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server error on request");
      } else {
        res.status(201).send("Request added");
      }
    }
  );
});

// PUT (update) a request
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { details } = req.body;
  const query = "UPDATE Requests SET Details = ? WHERE RequestID = ?";
  db.query(query, [details, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send("Request updated");
    }
  });
});

// DELETE a request
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Requests WHERE RequestID = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send("Request deleted");
    }
  });
});

module.exports = router;
