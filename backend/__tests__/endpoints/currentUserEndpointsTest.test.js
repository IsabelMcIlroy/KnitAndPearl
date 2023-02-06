// import fetch from "node-fetch";
const fetch = require("node-fetch");

test("checking current user", async () => {
  const resp = await fetch("http://localhost:3001/currentUser", {
    "Content-Type": "application/json",
  });
  const user = await resp.json();
  expect(user).toBeNull();
});
