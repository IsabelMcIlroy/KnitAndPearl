const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./routes/users");
const projectRouter = require("./routes/projects");

app.use("/users", userRouter);
app.use("/projects", projectRouter);

app.listen(3000);
