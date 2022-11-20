const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8080 || process.env.PORT;
const host = "localhost";
const app = express();

app.use(bodyParser.json());

// disable CORS error
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// index page get request handling
app.get("/", (req, res) => {
  res.send("<h3>Welcome to hand cricket comment page !</h3>");
});

// post request  handling
app.post("/api/comments", (req, res) => {
  try {
    const { firstName, lastName, comment } = req.body;

    const sql =
      "INSERT INTO handCricketComments (firstName,lastName,comment) VALUES (?,?,?)";
    const params = [firstName, lastName, comment];
    db.run(sql, params, (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(201).json({
          message: `${
            firstName + " " + lastName
          }'s comment added successfully !`,
          customerId: this.lastID,
        });
      }
    });
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

// get request handling
app.get("/api/comments", (req, res) => {
  try {
    const sql = "SELECT * FROM handCricketComments";
    const params = [];
    db.all(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ records: result });
      }
    });
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

// update request handling
app.put("/api/comments/:id", (req, res) => {
  try {
    const { firstName, lastName, comment } = req.body;
    const sql = `UPDATE handCricketComments set firstName = ?,lastName = ?,comment = ? WHERE id = ?`;
    const id = req.params.id;
    const params = [firstName, lastName, comment, id];

    // we must use normal function instead of arrow function for get this.changes

    db.run(sql, params, function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({
          updated: this.changes,
        });
      }
    });
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

// delete request handling
app.delete("/api/comments/:id", (req, res) => {
  try {
    db.run(
      "DELETE FROM handCricketComments WHERE id=?",
      req.params.id,
      function (err) {
        if (err) {
          res.status(400).json({ error: err.message });
        } else {
          res.status(200).json({ message: "item deleted successfully !" });
        }
      }
    );
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${host}/${PORT}`);
});
