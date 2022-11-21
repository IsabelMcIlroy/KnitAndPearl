const sqlitedb = require("better-sqlite3");
const db = new sqlitedb("database.db", sqlitedb.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  verbose: console.log;
});
let sql;

const initSqlite = () => {
  //connect to DB

  //create users table
  sql = `CREATE TABLE IF NOT EXISTS users (
	    id INTEGER PRIMARY KEY,
	    username TEXT NOT NULL,
	    password TEXT NOT NULL,
	    created_at DATETIME NOT NULL DEFAULT (datetime('now', 'localtime')), 
		UNIQUE(username)
	)`;
  db.exec(sql);

  //create projects table
  sql = `CREATE TABLE IF NOT EXISTS projects (
	    id INTEGER PRIMARY KEY,
	    owner_id INTEGER,
	    name TEXT NOT NULL,
	    type TEXT,
		rows TEXT NOT NULL,
		columns TEXT NOT NULL,
	    grid_colours TEXT,
	    created_at DATETIME NOT NULL DEFAULT (datetime('now', 'localtime')),
	    FOREIGN KEY(owner_id) REFERENCES users(id)
	)`;
  db.exec(sql);
};

module.exports = { db, initSqlite };
