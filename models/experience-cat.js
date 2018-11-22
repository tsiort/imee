var db = require('../db');

// User class
var Experience = {

  getAll: function(callback) {
    return db.query("Select * from `imeedb`.`exp_categories`", callback);
  },
  get: function(id, callback) {
    var sql = 'SELECT * FROM `imeedb`.`exp_categories` WHERE `id` = ? ';
    return db.query(sql, [id], callback);
  },
  new: function(name, callback) {
    var sql = 'INSERT INTO `imeedb`.`exp_categories` (`id`, `name`) VALUES (NULL, ?)';
    return db.query(sql, [name], callback);
  },
  update: function(id, name, callback) {
    var sql = 'UPDATE `imeedb`.`exp_categories` SET `name` = ? WHERE `id` = ?';
    return db.query(sql, [name, id], callback);
  },
  delete: function(id, callback) {
    var sql = "DELETE FROM `imeedb`.`exp_categories` WHERE `id` = ?";
    return db.query(sql, [id], callback);
  }

};

module.exports = Experience;
