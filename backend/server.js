const express = require("express");
const sqlite = require("better-sqlite3");
const session = require("express-session");
const { initSqlite } = require("./database");
const login = require("./requests/login");
const logout = require("./requests/logout");
const signup = require("./requests/signup");
const currentUser = require("./requests/currentUser");
const users = require("./requests/users");
const projects = require("./requests/projects");

initSqlite();

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
  })
);

login(app, "/login/");
logout(app, "/logout/");
signup(app, "/signup/");
currentUser(app, "/currentUser/");
users.user(app, "/users/");
users.userID(app, "/users/:id");
projects.newProject(app, "/projects/");
projects.projectsList(app, "/projects/projectsList/:checked");
projects.getProject(app, "/projects/:id");
projects.saveProject(app, "/projects/:id");
projects.changeProjectName(app, "/projects/editNames/:id");

app.listen(3001);
