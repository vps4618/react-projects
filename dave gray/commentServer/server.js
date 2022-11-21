const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv/config");
const striptags = require("striptags");

const PORT = 8080 || process.env.PORT;
const host = "localhost";
const app = express();

app.use(bodyParser.json());

// disable CORS error
app.use(
  cors({
    origin: "https://vps4618.github.io",
    methods: ["GET", "POST", "DELETE"],
  })
);

// index page get request handling
app.get("/", (req, res) => {
  res.send("<h3>Welcome to hand Cricket Comment page !</h3>");
});

// post request  handling
app.post("/api/comments", (req, res) => {
  try {
    const { firstName, lastName, comment, dateTime } = req.body;

    // remove html tags in case !!!
    let firstName1 = striptags(firstName);
    let lastName1 = striptags(lastName);
    let comment1 = striptags(comment);

    // remove spaces
    firstName1 = firstName1.trim();
    lastName1 = lastName1.trim();
    comment1 = comment1.trim();

    let isDev = false;

    if (firstName1 === "delete") {
      let id = lastName1;
      let enterkey = comment1;
      if (enterkey === process.env.enterKey) {
        db.run(
          "DELETE FROM handCricketComments WHERE id=?",
          id,
          function (err) {
            if (err) {
              res.status(400).json({ error: err.message });
            } else {
              res.status(200).json({ message: "item deleted successfully !" });
            }
          }
        );
      } else {
        res.status(400).json({ error: "Invalid key !" });
      }
    } else {
      if (firstName1 === process.env.devName) {
        firstName1 = "<font style='color:gold'>Vps4618<sup>dev</sup></font>";
        lastName1 = "";
        comment1 =
          "<font style='color:maroon;font-weight:bold;'>" +
          comment1 +
          "</font>";
        isDev = true;
      }

      const sql =
        "INSERT INTO handCricketComments (firstName,lastName,comment,dateTime) VALUES (?,?,?,?)";
      const params = [firstName1, lastName1, comment1, dateTime];
      db.run(sql, params, (err) => {
        if (err) {
          res.status(400).json({ error: err.message });
        } else {
          if (!isDev) {
            // async..await is not allowed in global scope, must use a wrapper
            async function main() {
              // Generate test SMTP service account from ethereal.email
              // Only needed if you don't have a real mail account for testing
              let testAccount = await nodemailer.createTestAccount();

              // create reusable transporter object using the default SMTP transport
              let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "handCricketComment4618@gmail.com", // generated ethereal user
                  pass: process.env.appPwd, // gmail generated app password
                },
              });

              // send mail with defined transport object
              let info = await transporter.sendMail({
                from: `"Hand Cricket Comment" <handCricketComment4618@gmail.com>`, // sender address
                to: "vishwapraveen4618@gmail.com", // list of receivers
                subject: `${firstName1} comment`, // Subject line
                // text: `Name : ${firstName + " "  +lastName} \nComment : ${comment}\nDate : ${dateTime}`, // plain text body
                html: `<label style="font-size:20px;font-weight:bold;">Name</label> : <label style="font-size:15px">${
                  firstName1 + " " + lastName1
                }</label><br>
              <br>
              <label style="font-size:20px;font-weight:bold;">Comment</label> : <label style="font-size:15px">${comment1}</label>
              <br>
              <br>
              <label style="font-size:20px;font-weight:bold;">Date</label> : <label style="font-size:15px">${dateTime}</label>`, // html body
              });
            }

            main().catch(console.error);
          }
          res.status(201).json({
            message: `${
              firstName1 + " " + lastName1
            }'s comment added successfully !`,
            customerId: this.lastID,
          });

          // dev comment
          let devName = "<font style='color:gold'>Vps4618<sup>dev</sup></font>";
          let devMessage =
            "<font style='color:maroon;font-weight:bold;'>" +
            `Thank you ${firstName1 + " " + lastName1} 🧡` +
            "</font>";
          let devLastName = "";
          let devParams = [devName, devLastName, devMessage,dateTime];
          db.run(sql, devParams, (err) => {
            if (err) {
              res.status(400).json({ error: err.message });
            } else {
              res.status(201);
            }
          });
        }
      });
    }
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
// app.put("/api/comments/:id", (req, res) => {
//   try {
//     const { firstName, lastName, comment,dateTime } = req.body;
//     const sql = `UPDATE handCricketComments set firstName = ?,lastName = ?,comment = ?,dateTime = ? WHERE id = ?`;
//     const id = req.params.id;
//     const params = [firstName, lastName, comment, id,dateTime];

// we must use normal function instead of arrow function for get this.changes

//     db.run(sql, params, function (err) {
//       if (err) {
//         res.status(400).json({ error: err.message });
//       } else {
//         res.status(200).json({
//           updated: this.changes,
//         });
//       }
//     });
//   } catch (err) {
//     res.status(400).json({ error: err.toString() });
//   }
// });

// delete request handling
// app.delete("/api/comments/:id", (req, res) => {
//   try {
//     db.run(
//       "DELETE FROM handCricketComments WHERE id=?",
//       req.params.id,
//       function (err) {
//         if (err) {
//           res.status(400).json({ error: err.message });
//         } else {
//           res.status(200).json({ message: "item deleted successfully !" });
//         }
//       }
//     );
//   } catch (err) {
//     res.status(400).json({ error: err.toString() });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server listening on http://${host}/${PORT}`);
});
