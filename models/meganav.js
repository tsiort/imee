var db = require('../db');

// User class
var Meganav = {

  get: function(callback) {
    return db.query("Select * from `imeedb`.`meganav` WHERE `id` = 1", callback);
  },
  insert: function(t1, t11, t12, t13, t11p, t12p, t13p, t2, t21, t22, t23, t21p, t22p, t23p, tf, callback) {
    var sql = 'INSERT INTO `imeedb`.`meganav` ' +
    '(`id`,'+
    '`meganav_title_1`,'+
    '`meganav_title_1_1`,'+
    '`meganav_title_1_2`,'+
    '`meganav_title_1_3`,'+
    '`meganav_title_1_1_prog`,'+
    '`meganav_title_1_2_prog`,'+
    '`meganav_title_1_3_prog`,'+
    '`meganav_title_2`,'+
    '`meganav_title_2_1`,'+
    '`meganav_title_2_2`,'+
    '`meganav_title_2_3`,'+
    '`meganav_title_2_1_prog`,'+
    '`meganav_title_2_2_prog`,'+
    '`meganav_title_2_3_prog`,'+
    '`meganav_featured`)'+
    ' VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    return db.query(sql, [t1, t11, t12, t13, t11p, t12p, t13p, t2, t21, t22, t23, t21p, t22p, t23p, tf], callback);
  },
  update: function(t1, t11, t12, t13, t11p, t12p, t13p, t2, t21, t22, t23, t21p, t22p, t23p, tf, callback) {
  var sql = 'UPDATE `imeedb`.`meganav` ' +
      'SET ' +
      '`meganav_title_1` = ?,'+
      '`meganav_title_1_1` = ?,'+
      '`meganav_title_1_2` = ?,'+
      '`meganav_title_1_3` = ?,'+
      '`meganav_title_1_1_prog` = ?,'+
      '`meganav_title_1_2_prog` = ?,'+
      '`meganav_title_1_3_prog` = ?,'+
      '`meganav_title_2` = ?,'+
      '`meganav_title_2_1` = ?,'+
      '`meganav_title_2_2` = ?,'+
      '`meganav_title_2_3` = ?,'+
      '`meganav_title_2_1_prog` = ?,'+
      '`meganav_title_2_2_prog` = ?,'+
      '`meganav_title_2_3_prog` = ?,'+
      '`meganav_featured` = ? '+
      'WHERE `id` = 1';
    return db.query(sql, [t1, t11, t12, t13, t11p, t12p, t13p, t2, t21, t22, t23, t21p, t22p, t23p, tf], callback);
  }

};

module.exports = Meganav;
