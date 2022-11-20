const sqlite3 = require("sqlite3").verbose();
const DB_SOURCE = "db.sqlite";

const db = new sqlite3.Database(DB_SOURCE, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected To the Database");
    db.run(
      "CREATE TABLE handCricketComments (id INTEGER PRIMARY KEY AUTOINCREMENT,firstName text,lastName text,comment text)",
      (err) => {
        if (err) {
          // console.log(err.message);
        }
      }
    );
  }
});

module.exports = db;