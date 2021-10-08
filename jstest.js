//import sqlite3 from 'sqlite3';
const sqlite3 = require('sqlite3').verbose();
function Startingg(){
// open the database
let db = new sqlite3.Database('./vkdb.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT LINK as link, ROWW as roww FROM vkph 
ORDER BY RANDOM() LIMIT 1`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.roww + " | " + row.link);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});


	db.each(`SELECT LINK as link, ROWW as roww FROM vkph 
ORDER BY RANDOM() LIMIT 1`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.roww + " | " + row.link);
  });
}
