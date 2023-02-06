const isAuthenticated = require("../../isAuthenticated");

test("should pass 401 to next() if no user", () => {
  const req = {};
  const res = null;
  const next = jest.fn();

  isAuthenticated(req, res, next);
  expect(next).toHaveBeenCalledTimes(1);
  expect(next).toHaveBeenLastCalledWith(401);
});

test("should call next() if there is a user", () => {
  const req = { session: { user: "Isabel" } };
  const res = null;
  const next = jest.fn();

  isAuthenticated(req, res, next);
  expect(next).toHaveBeenCalledTimes(1);
  expect(next).toHaveBeenCalledWith();
});
