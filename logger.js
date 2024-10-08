function log(req, res, next) {
  console.log('Logging...');
  console.log('Authenticating...');
  next();
}

module.exports = log;
