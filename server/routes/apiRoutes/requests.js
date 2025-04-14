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

// GET Single request by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM Requests WHERE RequestID = ?`;
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
  const { details, am, clientID } = req.body;

  const clientIDNum = parseInt(clientID, 10);

  const query =
    "INSERT INTO Requests (Details, AMName, ClientID) VALUES (?, ?, ?)";
  db.query(query, [details, am, clientIDNum], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on request");
    } else {
      res.status(201).json({
        message: "Request added",
        id: result.insertId, // ← this is the important part
      });
    }
  });
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
