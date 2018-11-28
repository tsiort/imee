var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

var Category = require('../models/category.js');
var Program = require('../models/program.js');

/* Categories GET */
router.get('/', authenticationMiddleware(), function(req, res, next) {


  Program.getAll(function(err, result) {
    if (err) {
      res.json(err);
    } else {


      result.forEach(function(item) {
        item.attachments = JSON.parse(item.attachments);
        item.categories = JSON.parse(item.categories);
      })
      res.render('admin/program', {
        layout: 'admin',
        title: 'Προγράμματα',
        type: 'prog',
        programs: result
      });
    }
  });
});
/* New Program GET */
router.get('/new', authenticationMiddleware(), function(req, res, next) {

  var docs = [],
    images = [];

  fs.readdir('./public/files/uploads/docs', function(err, docFiles) {
    if (err) {
      res.json(err);
      return;
    }
    docFiles.forEach(function(item) {
      var file = {};
      file.name = item;
      file.ext = path.extname(item).substring(1).toLowerCase();
      file.type = 'doc';
      docs.push(file);
    })

    fs.readdir('./public/files/uploads/images', function(err, imgFiles) {
      if (err) {
        res.json(err);
        return;
      }
      imgFiles.forEach(function(item) {
        var file = {};
        file.name = item;
        file.ext = path.extname(item).substring(1).toLowerCase();
        file.type = 'img';
        images.push(file);
      })

      Category.getAll(function(err, result) {

        if (err) {
          res.json(err);
        } else {
          res.render('admin/create', {
            layout: 'admin-wysiwyg',
            title: 'Νέο Πρόγραμμα',
            type: 'prog',
            docs: docs,
            images: images,
            category: result
          });
        }
      });


    });

  });
});
/* New Program POST */
router.post('/new', authenticationMiddleware(), function(req, res, next) {


  // Get params
  var progTitle = req.body.programTitle;
  var progText = req.body.programText;
  var progCategories = req.body.programCategories;
  var progImg = req.body.programImage;
  var progMainPage = req.body.programMainPage;
  var progAttachments = req.body.programAttachments;
  var progGallery = req.body.programGalleryImages;
  var progStartDate = req.body.programStartDate || null;
  var progEndDate = req.body.programEndDate || null;
  var progHours = req.body.programHours || null;
  var progCost = req.body.programCost || null;
  var progLocation = req.body.programLocation || null;
  var progTeacher = req.body.programTeacher || null;
  var progSections = req.body.progSections;
  var section1title = req.body.section1title || null;
  var section1text = req.body.section1text || null;
  var section2title = req.body.section2title || null;
  var section2text = req.body.section2text || null;
  var section3title = req.body.section3title || null;
  var section3text = req.body.section3text || null;
  var section4title = req.body.section4title || null;
  var section4text = req.body.section4text || null;
  var section5title = req.body.section5title || null;
  var section5text = req.body.section5text || null;
  var section6title = req.body.section6title || null;
  var section6text = req.body.section6text || null;

  if (req.body.programMainPage == 'on')
    progMainPage = 1;
  else
    progMainPage = 0;


  Program.new(
    progTitle,
    progMainPage,
    progText,
    progCategories,
    progAttachments,
    progImg,
    progGallery,
    progStartDate,
    progEndDate,
    progHours,
    progCost,
    progLocation,
    progTeacher,
    progSections,
    section1title,
    section1text,
    section2title,
    section2text,
    section3title,
    section3text,
    section4title,
    section4text,
    section5title,
    section5text,
    section6title,
    section6text,
    function(err, result) {

      if (err) {
        res.json(err);
        return;
      }
      req.flash('success_msg', 'Το πρόγραμμα ' + progTitle + ' δημιουργήθηκε με επιτυχία')
      res.redirect('/admin/program');

    });
});

/* Edit Program GET */
router.get('/:id/edit', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  var docs = [],
    images = [],
    category = [];

  fs.readdir('./public/files/uploads/docs', function(err, docFiles) {
    if (err) {
      res.json(err);
      return;
    }
    docFiles.forEach(function(item) {
      var file = {};
      file.name = item;
      file.ext = path.extname(item).substring(1).toLowerCase();
      file.type = 'doc';
      docs.push(file);
    })

    fs.readdir('./public/files/uploads/images', function(err, imgFiles) {
      if (err) {
        res.json(err);
        return;
      }
      imgFiles.forEach(function(item) {
        var file = {};
        file.name = item;
        file.ext = path.extname(item).substring(1).toLowerCase();
        file.type = 'img';
        images.push(file);
      })
      Program.get(id, function(err, result) {
        if (err) {
          res.json(err);
          return;
        }
        Category.getAll(function(err, categories) {
          if (err) {
            res.json(err);
            return;
          }
          category = categories;

          res.render('admin/edit', {
            layout: 'admin-wysiwyg',
            title: 'Επεξεργασία Προγράμματος',
            type: 'prog',
            result: result[0],
            docs: docs,
            images: images,
            category: category
          });
        });
      });


    });

  });




});
/* Edit Program POST */
router.post('/:id/edit', authenticationMiddleware(), function(req, res, next) {

  // Get params
  var id = req.params.id;
  var progTitle = req.body.programTitle;
  var progText = req.body.programText;
  var progCategories = req.body.programCategories;
  var progImg = req.body.programImage;
  var progMainPage = req.body.programMainPage;
  var progAttachments = req.body.programAttachments;
  var progGallery = req.body.programGalleryImages;
  var progStartDate = req.body.programStartDate;
  var progEndDate = req.body.programEndDate;
  var progHours = req.body.programHours;
  var progCost = req.body.programCost;
  var progLocation = req.body.programLocation;
  var progTeacher = req.body.programTeacher;
  var progSections = req.body.progSections;
  var section1title = req.body.section1title || null;
  var section1text = req.body.section1text || null;
  var section2title = req.body.section2title || null;
  var section2text = req.body.section2text || null;
  var section3title = req.body.section3title || null;
  var section3text = req.body.section3text || null;
  var section4title = req.body.section4title || null;
  var section4text = req.body.section4text || null;
  var section5title = req.body.section5title || null;
  var section5text = req.body.section5text || null;
  var section6title = req.body.section6title || null;
  var section6text = req.body.section6text || null;

  if (req.body.programMainPage == 'on')
    progMainPage = 1;
  else
    progMainPage = 0;


  Program.update(
    id,
    progTitle,
    progMainPage,
    progText,
    progCategories,
    progAttachments,
    progImg,
    progGallery,
    progStartDate,
    progEndDate,
    progHours,
    progCost,
    progLocation,
    progTeacher,
    progSections,
    section1title,
    section1text,
    section2title,
    section2text,
    section3title,
    section3text,
    section4title,
    section4text,
    section5title,
    section5text,
    section6title,
    section6text,
    function(err, result) {

      if (err) {
        res.json(err);
        return;
      }

      req.flash('success_msg', 'Το πρόγραμμα ' + progTitle + ' ενημερώθηκε με επιτυχία')
      res.redirect('/admin/program');

    });
});


/* Delete Program GET */
router.get('/:id/delete', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  Program.get(id, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.render('admin/delete', {
        layout: 'admin',
        title: 'Διαγραφή Προγράμματος',
        type: 'prog',
        result: result[0]
      });
    }
  });
});
/* Delete Program POST */
router.post('/:id/delete', authenticationMiddleware(), function(req, res, next) {
  var id = req.params.id;
  Program.delete(id, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      req.flash('success_msg', 'Το Πρόγραμμα διαγράφτηκε με επιτυχία')
      res.redirect('/admin/program');
    }
  });
});

// Authentication based restriction middleware
function authenticationMiddleware() {
  return (req, res, next) => {
    // if (req.isAuthenticated()) return next();
    // res.redirect('/login');
    return next();
  }
}


module.exports = router;
