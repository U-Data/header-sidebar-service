const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/headerSidebar';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
const database = mongoose.connection;

database.once('open', () => { console.log('Connection open'); })
  .on('error', (error) => { console.log('error', error); });

module.exports.db = db;
module.exports.database = database;
