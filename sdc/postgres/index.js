const { Client } = require('pg'); // ?

const client = new Client({
  user: 'angelazhou', // mac username
  host: 'localhost',
  database: 'angelazhou', // mac username
  password: '',
  port: 5432, // default postgresport
});

client.connect();
console.log("HI");
module.exports = client;
