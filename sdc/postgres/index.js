const { Client } = require('pg');

const client = new Client({
  user: 'angelazhou', // mac username
  database: 'udata',
  password: '',
  port: 5432, // default postgresport
}); 

client.connect().then(() => console.log('PostgreSQL connected.')).catch(error => console.log(error));

const postNewCourse = function (updatedValues, callback) {
  const {
    title, description, tag, avgRating,
    totalRatings, enrollment, createdBy,
    lastUpdated, language, imgUrl, listPrice,
    discountPrice, videoHrs, totalArticles,
    totalDownloads, activeCoupon, ccOptions,
  } = updatedValues;
  const query = 'insert into Course(title, description, tag, avg_rating, total_ratings, enrollment, created_by, last_updated, language, img_url, list_price, discount_price, video_hrs, total_articles, total_downloads, active_coupon, ccOptions) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)';
  client.query(query, [title, description, tag, avgRating, totalRatings,
    enrollment, createdBy, lastUpdated, language, imgUrl, listPrice,
    discountPrice, videoHrs, totalArticles, totalDownloads, activeCoupon,
    ccOptions], (error, results) => {
    callback(error, results);
  });
};

const getAllCourses = function (callback) {
  const query = `select * from Course`;
  client.query(query, (err, results) => {
    callback(err, results.rows);
  });
};

const getASingleCourse = function (courseId, callback) {
  const query = 'select * from Course where id=($1)';
  client.query(query, [courseId], (err, results) => {
    const singleCourse = results && results.rows ? results.rows : [];
    callback(err, singleCourse);
  });
};

const updateCourse = function (idToUpdate, updatedBody, callback) {
  const { newTitle, newDescription, newTag,
    newAvgRating, newTotalRatings, newEnrollment, newCreatedBy,
    newLastUpdated, newLanguage, newImgUrl, newListPrice,
    newDiscountPrice, newVideoHrs, newTotalArticles, newTotalDownloads,
    newActiveCoupon, newCcOptions } = updatedBody;
  const query = 'update Course set title=$1, description=$2, tag=$3, avg_rating=$4, total_ratings=$5, enrollment=$6, created_by=$7, last_updated=$8, language=$9, img_url=$10, list_price=$11, discount_price=$12, video_hrs=$13, total_articles=$14, total_downloads=$15, active_coupon=$16, ccOptions=$17 where id=$18';
  client.query(query, [newTitle, newDescription, newTag,
    newAvgRating, newTotalRatings, newEnrollment, newCreatedBy,
    newLastUpdated, newLanguage, newImgUrl, newListPrice,
    newDiscountPrice, newVideoHrs, newTotalArticles, newTotalDownloads,
    newActiveCoupon, newCcOptions, idToUpdate], (error, results) => {
    callback(error, results);
  });
};

const deleteCourse = function (courseId, callback) {
  const query = `delete from Course where id=${courseId}`;
  client.query(query, (error, results) => {
    callback(error, results);
  });
};

module.exports = client;
module.exports.postNewCourse = postNewCourse;
module.exports.getASingleCourse = getASingleCourse;
module.exports.getAllCourses = getAllCourses;
module.exports.updateCourse = updateCourse;
module.exports.deleteCourse = deleteCourse;
