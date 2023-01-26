// middleware to test if authenticated
function isAuthenticated(req, res, next) {
  if (req.session?.user) next();
  else next(401);
}
module.exports = isAuthenticated;
