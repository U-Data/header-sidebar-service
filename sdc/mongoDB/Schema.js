const mongoose = require('mongoose');

const { Schema } = mongoose;

const headerSidebarSchema = new Schema({
  id: { type: Number, unique: true },
  title: String,
  description: String,
  tag: String,
  avg_rating: Number,
  total_ratings: Number,
  enrollment: Number,
  created_by: String,
  last_updated: String,
  language: String,
  img_url: String,
  list_price: String,
  discount_price: String,
  video_hrs: Number,
  total_articles: Number,
  total_downloads: Number,
  active_coupon: String,
  ccOptions: [String],
});

const HeaderSidebar = mongoose.model('HeaderSidebar', headerSidebarSchema);

const getAllCourses = function (callback) {
  HeaderSidebar.find({}, (err, courses) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, courses);
    }
  });
};

const getASingleCourse = function (courseId, callback) {
  HeaderSidebar.findById(courseId, (err, course) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, course);
    }
  });
};

const updateCourse = function (courseId, update, callback) {
  HeaderSidebar.findOneAndUpdate({ id: courseId }, update, (err, updatedCourse) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, updatedCourse);
    }
  });
};

const deleteCourse = function (courseId, callback) {
  HeaderSidebar.remove({ id: courseId }, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const saveCourse = function (course, callback) {
  const newCourse = new HeaderSidebar(course);
  newCourse.save((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getAllCourses = getAllCourses;
module.exports.getASingleCourse = getASingleCourse;
module.exports.updateCourse = updateCourse;
module.exports.deleteCourse = deleteCourse;
module.exports.saveCourse = saveCourse;
