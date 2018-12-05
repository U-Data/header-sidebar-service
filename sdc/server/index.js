const newRelic = require('newrelic');
const redis = require('redis');
const client = redis.createClient();
const express = require('express');
const bodyParser = require('body-parser');
const courses = require('../postgres/index.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/courses/:id', express.static(path.join(__dirname, '../../public/dist')));

app.get('/healthCheck', (req, res) => {
  res.status(200).send('health check ok');
});

// app.get('/courses', (req, res) => {
//   courses.getAllCourses((err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

app.get('/courses/:id/header', (req, res) => {
  courses.getASingleCourse(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.delete('/courses/:id', (req, res) => {
  courses.deleteCourse(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.patch('/courses/:id', (req, res) => {
  courses.updateCourse(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

app.post('/courses', (req, res) => {
  courses.postNewCourse(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

// with redis
// const newRelic = require('newrelic');
// const redis = require('redis');
// const client = redis.createClient();
// const express = require('express');
// const bodyParser = require('body-parser');
// const courses = require('../postgres/index.js');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3003;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/courses/:id', express.static(path.join(__dirname, '../../public/dist')));

// app.get('/healthCheck', (req, res) => {
//   res.status(200).send('health check ok');
// });

// // app.get('/courses', (req, res) => {
// //   courses.getAllCourses((err, results) => {
// //     if (err) {
// //       res.status(500).send(err);
// //     } else {
// //       res.status(200).send(results);
// //     }
// //   });
// // });

// // get without cache
// const getSingleCourseFromDB = (req, res) => {
//   courses.getASingleCourse(req.params.id, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       // adding course info into cache for 60 minutes (60 seconds in 60 minutes is 3600)
//       client.setex(req.params.id, 3600, JSON.stringify(result));
//       res.status(200).send(result);
//     }
//   });
// };

// // get with cache
// app.get('/courses/:id/header', (req, res) => {
//   const coursesId = req.params.id;
//   client.get(coursesId, (err, result) => {
//     if (result) {
//       res.send(JSON.parse(result));
//     } else {
//       getSingleCourseFromDB(req, res);
//     }
//   });
// });

// app.delete('/courses/:id', (req, res) => {
//   courses.deleteCourse(req.params.id, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

// app.patch('/courses/:id', (req, res) => {
//   courses.updateCourse(req.params.id, req.body, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(result);
//     }
//   });
// });

// app.post('/courses', (req, res) => {
//   courses.postNewCourse(req.body, (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(results);
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`listening to port ${PORT}`);
// });