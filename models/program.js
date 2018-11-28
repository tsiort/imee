var db = require('../db');

// User class
var Program = {

  new: function(
    progTitle,
    progMainPage,
    progText,
    progCategories,
    progAttachments,
    image,
    gallery,
    start,
    end,
    hours,
    cost,
    location,
    teacher,
    section_indicator,
    section01title,
    section01text,
    section02title,
    section02text,
    section03title,
    section03text,
    section04title,
    section04text,
    section05title,
    section05text,
    section06title,
    section06text,
    callback) {

    var sql =
      'INSERT INTO `imeedb`.`program`' +
      '(`id`,' +
      '`title`,' +
      '`firstPage`,' +
      '`text`,' +
      '`categories`,' +
      '`attachments`,' +
      '`image`,' +
      '`gallery`,' +
      '`start_date`,' +
      '`end_date`,' +
      '`hours`,' +
      '`cost`,' +
      '`location`,' +
      '`teacher`,' +
      '`section_indicator`,' +
      '`section01title`,' +
      '`section01text`,' +
      '`section02title`,' +
      '`section02text`,' +
      '`section03title`,' +
      '`section03text`,' +
      '`section04title`,' +
      '`section04text`,' +
      '`section05title`,' +
      '`section05text`,' +
      '`section06title`,' +
      '`section06text`)' +
      'VALUES' +
      '(NULL,' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '?, ' +
      '? )';

    return db.query(sql,
      [
        progTitle,
        progMainPage,
        progText,
        JSON.stringify(progCategories),
        JSON.stringify(progAttachments),
        image,
        JSON.stringify(gallery),
        start,
        end,
        hours,
        cost,
        location,
        teacher,
        section_indicator,
        section01title,
        section01text,
        section02title,
        section02text,
        section03title,
        section03text,
        section04title,
        section04text,
        section05title,
        section05text,
        section06title,
        section06text
      ],
      callback);

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
  update: function(
    id,
    progTitle,
    progMainPage,
    progText,
    progCategories,
    progAttachments,
    image,
    gallery,
    start,
    end,
    hours,
    cost,
    location,
    teacher,
    section_indicator,
    section01title,
    section01text,
    section02title,
    section02text,
    section03title,
    section03text,
    section04title,
    section04text,
    section05title,
    section05text,
    section06title,
    section06text,
    callback) {

    var sql =
      'UPDATE `imeedb`.`program`' +
      'SET' +
      '`title` = ?,' +
      '`firstPage` = ?,' +
      '`text` = ?,' +
      '`categories` = ?,' +
      '`attachments` = ?,' +
      '`image` = ?,' +
      '`gallery` = ?,' +
      '`start_date` = ?,' +
      '`end_date` = ?,' +
      '`hours` = ?,' +
      '`cost` = ?,' +
      '`location` = ?,' +
      '`teacher` = ?,' +
      '`section_indicator` = ?,' +
      '`section01title` = ?,' +
      '`section01text` = ?,' +
      '`section02title` = ?,' +
      '`section02text` = ?,' +
      '`section03title` = ?,' +
      '`section03text` = ?,' +
      '`section04title` = ?,' +
      '`section04text` = ?,' +
      '`section05title` = ?,' +
      '`section05text` = ?,' +
      '`section06title` = ?,' +
      '`section06text` = ? ' +
      'WHERE `id` = ?';

    return db.query(sql,
      [
        progTitle,
        progMainPage,
        progText,
        JSON.stringify(progCategories),
        JSON.stringify(progAttachments),
        image,
        JSON.stringify(gallery),
        start,
        end,
        hours,
        cost,
        location,
        teacher,
        section_indicator,
        section01title,
        section01text,
        section02title,
        section02text,
        section03title,
        section03text,
        section04title,
        section04text,
        section05title,
        section05text,
        section06title,
        section06text,
        id
      ],
      callback);

  },
  delete: function(id, callback) {
    var sql = 'DELETE FROM `imeedb`.`program` ' +
              'WHERE `id` = ?';
    return db.query(sql, [id], callback);
  },
  getWithCategory: function(categoryId, callback) {
    var sql = "SELECT * FROM imeedb.program where json_contains(`categories`, '\"" + categoryId + "\"')";
    return db.query(sql, callback);
  },


};

module.exports = Program;
