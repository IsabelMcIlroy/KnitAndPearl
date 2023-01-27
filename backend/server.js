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

const userRouter = require("./routes/users");
const projectRouter = require("./routes/projects");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const signupRouter = require("./routes/signup");
const currentUserRouter = require("./routes/currentUser");

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/signup", signupRouter);
app.use("/currentUser", currentUserRouter);

app.listen(3001);
