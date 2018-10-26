var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.render('foreas/istoriko', {
    title: 'Ο Φορέας',
  });
});

router.get('/synerg', function(req, res, next) {
  res.render('foreas/synerg', {
    title: 'Ο Φορέας',
  });
});
router.get('/ipodomi', function(req, res, next) {
  res.render('foreas/ipodomi', {
    title: 'Ο Φορέας',
  });
});
router.get('/drast', function(req, res, next) {
  res.render('foreas/drast', {
    title: 'Ο Φορέας',
  });
});
router.get('/org', function(req, res, next) {
  res.render('foreas/org', {
    title: 'Ο Φορέας',
  });
});
router.get('/ekdilo', function(req, res, next) {
  res.render('foreas/ekdilo', {
    title: 'Ο Φορέας',
  });
});

module.exports = router;
