const express = require("express");
const sqlite = require("better-sqlite3");
const session = require("express-session");

require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createPool(process.env.DATABASE_URL);
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

app.listen(DB_PORT);
