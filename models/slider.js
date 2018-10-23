var db = require('../db');

// User class
var Slider = {

  get: function(callback) {
    return db.query("Select * from `imeedb`.`slider` WHERE `id` = 1", callback);
  },
  insert: function(img1, title1, text1, prog1, img2, title2, text2, prog2, img3, title3, text3, prog3, callback) {
    var sql = 'INSERT INTO `imeedb`.`slider` ' +
              '( `id`, ' +
              '`slider1img`, `slider1title`, `slider1text`, `slider1prog`,' +
              '`slider2img`, `slider2title`, `slider2text`, `slider2prog`,' +
              '`slider3img`, `slider3title`, `slider3text`, `slider3prog`' +
              ')'+
              ' VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
              console.log(img1 + ' ' +  title1 + ' ' +   text1 + ' ' +   prog1 + ' ' +   img2 + ' ' +   title2 + ' ' +   text2 + ' ' +   prog2 + ' ' +   img3 + ' ' +   title3 + ' ' +   text3 + ' ' +   prog3);
              console.log(sql);
    return db.query(sql, [img1, title1, text1, prog1, img2, title2, text2, prog2, img3, title3, text3, prog3], callback);
  },
  update: function(img1, title1, text1, prog1, img2, title2, text2, prog2, img3, title3, text3, prog3, callback) {

    var sql = 'UPDATE `imeedb`.`slider` ' +
              'SET ' +
              '`slider1img` = ?, `slider1title` = ?, `slider1text` = ?, `slider1prog` = ?, ' +
              '`slider2img` = ?, `slider2title` = ?, `slider2text` = ?, `slider2prog` = ?, ' +
              '`slider3img` = ?, `slider3title` = ?, `slider3text` = ?, `slider3prog` = ? ' + 
              'WHERE `id` = 1';
    return db.query(sql, [img1, title1, text1, prog1, img2, title2, text2, prog2, img3, title3, text3, prog3], callback);
  }

};

module.exports = Slider;
