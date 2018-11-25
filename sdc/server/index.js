const newRelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const courses = require('../postgres/index.js');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/src/index.jsx'));

app.get('/healthCheck', (req, res) => {
  res.status(200).send('health check ok');
});

app.get('/courses', (req, res) => {
  courses.getAllCourses((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/courses/:id', (req, res) => {
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
