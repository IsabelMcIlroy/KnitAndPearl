const express = require("express");
const sqlite = require("better-sqlite3");
const session = require("express-session");
const { initSqlite } = require("./database");

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

const isAuthenticated = require("./isAuthenticated");
const currentUserHandler = require("./requests/currentUser");
const loginHandler = require("./requests/login");
const signupHandler = require("./requests/signup");
const logoutHandler = require("./requests/logout");
const newProjectHandler = require("./requests/newProject");
const projectsListHandler = require("./requests/projectsList");
const viewProjectHandler = require("./requests/viewProject");
const saveProjectHandler = require("./requests/saveProject");
const changeProjectNameHandler = require("./requests/changeProjectName");

app.get("/currentUser/", currentUserHandler);
app.post("/login", loginHandler);
app.post("/signup", signupHandler);
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
