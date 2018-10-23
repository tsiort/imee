var express = require('express');
var router = express.Router();

/* Dashboard GET */
router.get('/', authenticationMiddleware(), function(req, res, next) {
  res.render('admin/index', {
    layout: 'admin',
    title: 'Dashboard',
    active: 'none',
  });
});

// Authentication based restriction middleware
function authenticationMiddleware() {
  return (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
  }
}

module.exports = router;
