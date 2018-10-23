var db = require('../db');

// User class
var Category = {

  getAll: function(callback) {
    return db.query("Select * from `imeedb`.`categories`", callback);
  },
  getCategory: function(id, callback) {
    var sql = 'SELECT * FROM `imeedb`.`categories` WHERE `id` = ? ';
    return db.query(sql, [id], callback);
  },
  newCategory: function(text, callback) {
    var sql = 'INSERT INTO `imeedb`.`categories` (`id`, `category`) VALUES (NULL, ?);';
    return db.query(sql, [text], callback);
  },
  updateCategory: function(id, text, callback) {
    var sql = "UPDATE `imeedb`.`categories` SET `category` = ? WHERE `id` = ?";
    return db.query(sql, [text, id], callback);
  },
  deleteCategory: function(id, callback) {
    var sql = "DELETE FROM `imeedb`.`categories` WHERE `id` = ?";
    return db.query(sql, [id], callback);
  }

};

module.exports = Category;
