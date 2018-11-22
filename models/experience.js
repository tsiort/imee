var db = require('../db');

// User class
var Experience = {

  getAll: function(callback) {
    return db.query("Select * from `imeedb`.`exp`", callback);
  },
  get: function(id, callback) {
    var sql = 'SELECT * FROM `imeedb`.`exp` WHERE `id` = ? ';
    return db.query(sql, [id], callback);
  },
  getWithCategory: function(categoryId, callback) {
    var sql = "SELECT * FROM imeedb.exp where json_contains(`categories`, '\"" + categoryId + "\"')";
    return db.query(sql, callback);
  },
  new: function(categories, title, text, callback) {
    var sql = 'INSERT INTO `imeedb`.`exp` (`id`, `categories`, `title`, `text`) VALUES (NULL, ?, ?, ?)';
    return db.query(sql, [JSON.stringify(categories), title, text], callback);
  },
  update: function(id, categories, title, text, callback) {
    var sql = 'UPDATE `imeedb`.`exp` SET `categories` = ?,`title` = ?, `text` = ? WHERE `id` = ?';
    return db.query(sql, [JSON.stringify(categories), title, text, id], callback);
  },
  delete: function(id, callback) {
    var sql = "DELETE FROM `imeedb`.`exp` WHERE `id` = ?";
    return db.query(sql, [id], callback);
  }

};

module.exports = Experience;
