var express = require('express');
var router = express.Router();

var Category = require('../models/category.js');


/* Categories GET */
router.get('/', authenticationMiddleware(), function(req, res, next) {

  Category.getAll(function(err, result) {

    if (err) {
      res.json(err);
    } else {
      res.render('admin/categories', {
        layout: 'admin',
        title: 'Κατηγορίες',
        type: 'cat',
        categories: result
      });
    }
  });
});

/* New Category GET */
router.get('/new', authenticationMiddleware(), function(req, res, next) {
  res.render('admin/create', {
    layout: 'admin',
    title: 'Νεα Κατηγορία',
    type: 'cat',
  });
});
/* New Category POST */
router.post('/new', authenticationMiddleware(), function(req, res, next) {

  req.checkBody('categoryName', 'Το Όνομα της κατηγορίας είναι υποχρεωτικό').notEmpty();

  var errors = req.validationErrors();

  if(errors) {
    req.flash('errors', errors);
    res.redirect(req.originalUrl);
    return;
  }
  var name = req.body.categoryName;

  Category.newCategory(name, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      req.flash('success_msg', 'Η Κατηγορία '+name+' δημιουργήθηκε με επιτυχία')
      res.redirect('/admin/category');
    }
  });
});
/* Delete Category GET */
router.get('/:id/delete', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  Category.getCategory(id, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.render('admin/delete', {
        layout: 'admin',
        title: 'Διαγραφή Κατηγορίας',
        type: 'cat',
        result: result[0]
      });
    }
  });
});
/* Delete Category POST */
router.post('/:id/delete', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  Category.deleteCategory(id, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      req.flash('success_msg', 'Η Κατηγορία διαγράφτηκε με επιτυχία')
      res.redirect('/admin/category');
    }
  });
});
/* Edit Category GET */
router.get('/:id/edit', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  Category.getCategory(id, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.render('admin/edit', {
        layout: 'admin',
        title: 'Επεξεργασία Κατηγορίας',
        type: 'cat',
        result: result[0]
      });
    }
  });
});
/* Edit Category POST */
router.post('/:id/edit', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  var name = req.body.categoryName;

  req.checkBody('categoryName', 'Το Όνομα της κατηγορίας είναι υποχρεωτικό').notEmpty();

  var errors = req.validationErrors();

  if(errors) {
    req.flash('errors', errors);
    res.redirect(req.originalUrl);
    return;
  }

  Category.updateCategory(id, name, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      req.flash('success_msg', 'Η Κατηγορία μετονομάστηκε σε '+name+' με επιτυχία')
      res.redirect('/admin/category');
    }
  });
});


// Authentication based restriction middleware
function authenticationMiddleware() {
  return (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
    // return next();
  }
}

module.exports = router;
