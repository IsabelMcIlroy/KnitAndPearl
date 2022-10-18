const express = require("express");
const { initSqlite } = require("./database");
const escapeHtml = require("escape-html");

initSqlite();

app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

const app = express();

app.use(express.json());

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

app.get("/", function (req, res) {
  res.send(
    '<form action="/login" method="post">' +
      'Username: <input name="user"><br>' +
      'Password: <input name="pass" type="password"><br>' +
      '<input type="submit" text="Login"></form>'
  );
});

const userRouter = require("./routes/users");
const projectRouter = require("./routes/projects");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

app.listen(3000);
