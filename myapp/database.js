const sqlite3 = require("sqlite3").verbose();
let sql;

const db = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

const initSqlite = () => {
  //connect to DB

  //create users table
  sql = `CREATE TABLE IF NOT EXISTS users (
	    id INTEGER PRIMARY KEY,
	    username TEXT NOT NULL,
	    password TEXT NOT NULL,
	    created_at DATETIME NOT NULL DEFAULT (datetime('now', 'localtime')) 
	)`;
  db.run(sql);

  //create projects table
  sql = `CREATE TABLE IF NOT EXISTS projects (
	    id INTEGER PRIMARY KEY,
	    owner_id INTEGER,
	    name TEXT NOT NULL,
	    type TEXT,
	    grid_colours TEXT NOT NULL,
	    created_at DATETIME NOT NULL DEFAULT (datetime('now', 'localtime')),
	    FOREIGN KEY(owner_id) REFERENCES users(id)
	)`;
  db.run(sql);
};

module.exports = { db, initSqlite };
