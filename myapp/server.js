const express = require("express");
const session = require("express-session");
const { initSqlite } = require("./database");
const escapeHtml = require("escape-html");

initSqlite();

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

function isAuthenticated(req, res, next) {
  if (req.session.user) next();
  else next("route");
}

app.get("/", isAuthenticated, function (req, res) {
  res.send(
    "hello, " +
      escapeHtml(req.session.user) +
      "!" +
      ' <a href="/logout">Logout</a>'
  );
});

app.get("/test_login", function (req, res) {
  res.send(
    '<form action="/login" method="post">' +
      'Username: <input name="username"><br>' +
      'Password: <input name="password" type="password"><br>' +
      '<input type="submit" text="Login"></form>'
  );
});

app.get("/test_signup", function (req, res) {
  res.send(
    '<form action="/signup" method="post">' +
      'Username: <input name="username"><br>' +
      'Password: <input name="password" type="password"><br>' +
      '<input type="submit" text="Signup"></form>'
  );
});

const userRouter = require("./routes/users");
const projectRouter = require("./routes/projects");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const signupRouter = require("./routes/signup");

app.use(express.json());

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/signup", signupRouter);

app.listen(3001);
