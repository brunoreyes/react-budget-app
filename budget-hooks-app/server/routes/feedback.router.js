const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// // // GET all orders that have been placed, populate with data from the pizza collection
// // router.get('/', (req, res) => {
// //   // Find all orders and return them
// //   pool
// //     .query('SELECT * FROM "feedback";')
// //     .then((result) => {
// //       res.send(result.rows);
// //     })
// //     .catch((error) => {
// //       console.log('Error GET /api/feedback', error);
// //       res.sendStatus(500);
// //     });
// // });

// // POST new feedback submission
// router.post('/', (req, res) => {
//   const newFeedback = req.body;
//   const sqlCommand = `INSERT INTO feedback (feeling, understanding, support, comments)
//  VALUES ($1, $2, $3, $4)`;
//   pool
//     .query(sqlCommand, [
//       newFeedback.feeling,
//       newFeedback.understanding,
//       newFeedback.support,
//       newFeedback.comments,
//     ])
//     .then((result) => {
//       console.log('Sent feedback submission to database', newFeedback);
//       // (201) sending okay status
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log(`Error making database query ${sqlCommand}`, error);
//       // (500) sending error status
//       res.sendStatus(500);
//     });
// });

// // DELETE a feedback submission

// // router.delete('/:id', (req, res) => {
// //   pool
// //     .query('DELETE FROM "feedback" WHERE id=$1', [req.params.id])
// //     .then((result) => {
// //       res.sendStatus(200);
// //     })
// //     .catch((error) => {
// //       console.log('Error DELETE /api/feedback', error);
// //       res.sendStatus(500);
// //     });
// // });

module.exports = router;
