require("dotenv").config();
const { Client } = require('pg');


const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect((err) => {
  // console.log(client.connectionString)
  if (err)
      throw err;
});

module.exports = client