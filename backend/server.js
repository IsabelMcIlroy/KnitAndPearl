const express = require("express");
const sqlite = require("better-sqlite3");
const session = require("express-session");
const { initSqlite } = require("./database");
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

const currentUserHandler = require("./requests/currentUser");
const loginHandler = require("./requests/login");
const signupHandler = require("./requests/signup");
const logoutHandler = require("./requests/logout");
const isAuthenticated = require("./isAuthenticated");

app.get("/currentUser/", currentUserHandler);
app.post("/login", loginHandler);
app.post("/signup", signupHandler);
app.post("/logout", isAuthenticated, logoutHandler);

projects.newProject(app, "/projects/");
projects.projectsList(app, "/projects/projectsList/:checked");
projects.getProject(app, "/projects/:id");
projects.saveProject(app, "/projects/:id");
projects.changeProjectName(app, "/projects/editNames/:id");

app.listen(3001);
