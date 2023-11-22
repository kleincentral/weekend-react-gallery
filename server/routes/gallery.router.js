const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  // code here
  const sqlText = `
  UPDATE "gallery"
  SET "likes" = "likes"+1
  WHERE "id" = $1;`;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      console.log("Updated likes with ID", req.params.id);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get("/", (req, res) => {
  // code here
  const sqlText = `
  SELECT * FROM "gallery"
  ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Got things back:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

module.exports = router;
