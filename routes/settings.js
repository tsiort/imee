var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

// Models
var Program = require('../models/program.js');
var Slider = require('../models/slider.js');
var Meganav = require('../models/meganav.js');


/* Slider GET */
router.get('/slider', authenticationMiddleware(), function(req, res, next) {

  var images = [];

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

    Program.getAll(function(err, result) {
      if (err) {
        res.json(err);
      } else {

        Slider.get(function(err, slider) {
          if (err) {
            res.json(err);
          } else {
            res.render('admin/slider', {
              layout: 'admin',
              title: 'Ρυθμίσεις',
              type: 'slider',
              images: images,
              programs: result,
              slider: slider[0]
            });

          }
        });
      }
    });
  });
});


/* Slider POST */
router.post('/slider', authenticationMiddleware(), function(req, res, next) {
  var img1 = req.body.sliderimg1 || null;
  var title1 = req.body.slidertitle1 || null;
  var text1 = req.body.slidertext1 || null;
  var prog1 = req.body.sliderprog1 || null;
  var img2 = req.body.sliderimg2 || null;
  var title2 = req.body.slidertitle2 || null;
  var text2 = req.body.slidertext2 || null;
  var prog2 = req.body.sliderprog2 || null;
  var img3 = req.body.sliderimg3 || null;
  var title3 = req.body.slidertitle3 || null;
  var text3 = req.body.slidertext3 || null;
  var prog3 = req.body.sliderprog3 || null;

  Slider.get(function(err, slider) {
    if (err) {
      res.json(err);
      return;
    }

    if (!slider[0]) {

      Slider.insert(img1, title1, text1, prog1, img2, title2, text2, prog2, img3, title3, text3, prog3, function(err, slider) {
        if (err) {
          res.json(err);
          return;
        }
        req.flash('success_msg', 'Η ενημέρωση ηταν επιτυχής');
        res.redirect(req.originalUrl);
        return;
      });
    } else {

      Slider.update(img1, title1, text1, prog1, img2, title2, text2, prog2, img3, title3, text3, prog3, function(err, slider) {
        if (err) {
          res.json(err);
          return;
        }
        req.flash('success_msg', 'Η ενημέρωση ηταν επιτυχής');
        res.redirect(req.originalUrl);
        return;
      });



    }



  });
});


/* Slider GET */
router.get('/meganav', authenticationMiddleware(), function(req, res, next) {

  var programs = [];
  var meganav = [];

  Program.getAll(function(err, result) {
    if (err) {
      res.json(err);
      return;
    }
    programs = result;

    Meganav.get(function(err, result) {
      if (err) {
        res.json(err);
        return;
      }
      meganav = result[0];

      res.render('admin/meganav', {
        layout: 'admin',
        title: 'Ρυθμίσεις',
        type: 'meganav',
        // images: images,
        programs: programs,
        meganav: meganav
      });
    });
  });

});


/* Slider POST */
router.post('/meganav', authenticationMiddleware(), function(req, res, next) {
  var t1 = req.body.meganav_title_1 || null;
  var t11 = req.body.meganav_title_1_1 || null;
  var t12 = req.body.meganav_title_1_2 || null;
  var t13 = req.body.meganav_title_1_3 || null;
  var t11p = req.body.meganav_title_1_1_prog || null;
  var t12p = req.body.meganav_title_1_2_prog || null;
  var t13p = req.body.meganav_title_1_3_prog || null;
  var t2 = req.body.meganav_title_2 || null;
  var t21 = req.body.meganav_title_2_1 || null;
  var t22 = req.body.meganav_title_2_2 || null;
  var t23 = req.body.meganav_title_2_3 || null;
  var t21p = req.body.meganav_title_2_1_prog || null;
  var t22p = req.body.meganav_title_2_2_prog || null;
  var t23p = req.body.meganav_title_2_3_prog || null;
  var tf = req.body.meganav_featured || null;

  Meganav.get(function(err, meganav) {
    if (err) {
      res.json(err);
      return;
    }

    if (!meganav[0]) {

      Meganav.insert(t1, t11, t12, t13, t11p, t12p, t13p, t2, t21, t22, t23, t21p, t22p, t23p, tf, function(err, meganav) {
        if (err) {
          res.json(err);
          return;
        }
        req.flash('success_msg', 'Η ενημέρωση ηταν επιτυχής');
        res.redirect(req.originalUrl);
        return;
      });
    } else {

      Meganav.update(t1, t11, t12, t13, t11p, t12p, t13p, t2, t21, t22, t23, t21p, t22p, t23p, tf, function(err, meganav) {
        if (err) {
          res.json(err);
          return;
        }
        req.flash('success_msg', 'Η ενημέρωση ηταν επιτυχής');
        res.redirect(req.originalUrl);
        return;
      });

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
