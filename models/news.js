var db = require('../db');

// User class
var News = {

  getAll: function(callback) {
    return db.query("Select * from `imeedb`.`news`", callback);
  },
  get: function(id, callback) {
    var sql = 'SELECT * FROM `imeedb`.`news` WHERE `id` = ? ';
    return db.query(sql, [id], callback);
  },
  getFeatured: function(callback) {
    var sql = 'SELECT * FROM `imeedb`.`news` WHERE `first_page` = 1';
    return db.query(sql, callback);
  },
  new: function(first_page, title, text, callback) {
    var sql = 'INSERT INTO `imeedb`.`news` (`id`, `first_page`, `title`, `text`, `create_time`, `update_time`) VALUES (NULL, ?, ?, ?, now(), now())';
    return db.query(sql, [first_page, title, text], callback);
  },
  update: function(id, first_page, title, text, callback) {
    var sql = 'UPDATE `imeedb`.`news` SET `first_page` = ?,`title` = ?, `text` = ?, `update_time` = now() WHERE `id` = ?';
    return db.query(sql, [first_page, title, text, id], callback);
  },
  delete: function(id, callback) {
    var sql = "DELETE FROM `imeedb`.`news` WHERE `id` = ?";
    return db.query(sql, [id], callback);
  }

};

module.exports = News;
