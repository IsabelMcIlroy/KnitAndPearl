/**
 * @jest-environment node
 **/
//const server = require("../../server");
//let _server;
//const fetch = require("fetch");

beforeAll(() => {
  _server = server.app.listen(3001);
});

test.todo("checking current user", async () => {
  //   const resp = await fetch("http://localhost:3001/currentUser", {
  //     "Content-Type": "application/json",
  //   });
  //   const user = await resp.json();
  //   expect(user).toBeTruthy();
});

afterAll(() => {
  _server.unref();
});
