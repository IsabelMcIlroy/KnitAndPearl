const express = require("express");
const { initSqlite } = require("./database");
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

initSqlite();

const app = express();

app.use(express.json());

const userRouter = require("./routes/users");
const projectRouter = require("./routes/projects");

app.use("/users", userRouter);
app.use("/projects", projectRouter);

app.listen(3000);
