var db = require('../db');

// User class
var Program = {

  new: function(progTitle, progMainPage, progText, progCategories, progAttachments, image, gallery, start, end, hours, cost, location, teacher, callback) {
    var sql = 'INSERT INTO `imeedb`.`program` (`id`, `title`, `firstPage`, `text`, `categories`, `attachments`, `image`, `gallery`, `start_date`, `end_date`, `hours`, `cost`, `location`, `teacher`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    return db.query(sql, [progTitle, progMainPage, progText, JSON.stringify(progCategories), JSON.stringify(progAttachments), image, JSON.stringify(gallery), start, end, hours, cost, location, teacher ], callback);
  },
  getAll: function(callback) {
    return db.query("SELECT * FROM `imeedb`.`program`", callback);
  },
  get: function(id, callback) {
    var sql = 'SELECT * FROM `imeedb`.`program` WHERE `id` = ? ';
    return db.query(sql, [id], callback);
  },
  getFeatured: function(callback) {
    var sql = 'SELECT * FROM `imeedb`.`program` WHERE `firstPage` = 1';
    return db.query(sql, callback);
  },
  update: function(id, title, mainPage, text, categories, attachments, image, gallery, start, end, hours, cost, location, teacher, callback) {
    var sql = "UPDATE `imeedb`.`program`" +
              "SET `title` = ?, `firstPage` = ?, `text` = ?, `categories` = ?, `attachments` = ?, `image` = ?, `gallery` = ?, `start_date` = ?, `end_date` = ?, `hours` = ?, `cost` = ?, `location` = ?, `teacher` = ?" +
              "WHERE `id` = ?";
    return db.query(sql, [title, mainPage, text, JSON.stringify(categories), JSON.stringify(attachments), image, JSON.stringify(gallery), start, end, hours, cost, location, teacher, id], callback);
  },
  delete: function(id, callback) {
    var sql = "DELETE FROM `imeedb`.`program` \
               WHERE `id` = ?";
    return db.query(sql, [id], callback);
  },
  getWithCategory: function(categoryId, callback) {
    var sql = "SELECT * FROM imeedb.program where json_contains(`categories`, '\"" + categoryId + "\"')";
    return db.query(sql, callback);
  },




};

module.exports = Program;
