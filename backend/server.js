const express = require("express");
const session = require("express-session");
const { initSqlite } = require("./database");
const escapeHtml = require("escape-html");

initSqlite();

const app = express();
app.use(express.json());

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
  else next(401);
}
module.exports = isAuthenticated;

app.get("/", isAuthenticated, function (req, res) {
  res.json(
    "hello, " +
      escapeHtml(req.session.user) +
      "!" +
      ' <a href="/logout">Logout</a>'
  );
});

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
