const express = require("express");
const sqlite = require("better-sqlite3");
const session = require("express-session");

require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log("Connected to PlanetScale!");
// connection.end();
// var session = require("express-session");
// var MySQLStore = require("express-mysql-session")(session);

const app = express();
app.use(express.json());

const SqliteStore = require("better-sqlite3-session-store")(session);
const db = new sqlite("sessions.db", { verbose: console.log });

app.use(
  session({
    store: new SqliteStore({
      client: db,
      expired: {
        clear: true,
        intervalMs: 900000, //ms = 15min
      },
    }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: "/",
      _expires: null,
      originalMaxAge: null,
      httpOnly: true,
      sameSite: true,
    },
  })
);
// var options = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   // createDatabaseTable: false,
//   // schema: {
//   //   tableName: "sessions",
//   //   columnNames: {
//   //     session_id: "session_id",
//   //     expires: "expires",
//   //     data: "JSON",
//   //   },
//   // },
// };

// var connection = mysql.createPool(options);
// var sessionStore = new MySQLStore({}, connection);
// //const sessionStore = new MySQLStore(options);
// const expiryDate = new Date(Date.now() + 60 * 60 * 1000);
// app.use(
//   session({
//     key: "Knit_And_Pearl",
//     store: sessionStore,
//     secret: process.env.SESSION_SECERT,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: true,
//       path: "/",
//       expires: expiryDate,
//       httpOnly: true,
//       sameSite: "lax",
//     },
//   })
// );

const isAuthenticated = require("./isAuthenticated");
const loginHandler = require("./requests/login");
const signupHandler = require("./requests/signup");
const currentUserHandler = require("./requests/currentUser");
const logoutHandler = require("./requests/logout");
const newProjectHandler = require("./requests/newProject");
const projectsListHandler = require("./requests/projectsList");
const viewProjectHandler = require("./requests/viewProject");
const saveProjectHandler = require("./requests/saveProject");
const changeProjectNameHandler = require("./requests/changeProjectName");

app.post("/login", loginHandler);
app.post("/signup", signupHandler);
app.get("/currentUser", currentUserHandler);
app.post("/logout", isAuthenticated, logoutHandler);
app.post("/projects", isAuthenticated, newProjectHandler);
app.get(
  "/projects/projectsList/:checked",
  isAuthenticated,
  projectsListHandler
);
app.get("/projects/:id", isAuthenticated, viewProjectHandler);
app.put("/projects/:id", isAuthenticated, saveProjectHandler);
app.put("/projects/editNames/:id", isAuthenticated, changeProjectNameHandler);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${Number(port)}`));
