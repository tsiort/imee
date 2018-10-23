var db = require('../db');

// User class
var User = {

  getAll: function(callback) {

    return db.query("Select * from user", callback);

  },
  getUser: function(username, password, callback) {

    var sql = 'SELECT * FROM `user` WHERE `username` = ? AND `password`  = ?';
    return db.query(sql, [username, password], callback);

  }
  // addTask: function(Task, callback) {
  //   return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);
  // },
  // deleteTask: function(id, callback) {
  //   return db.query("delete from task where Id=?", [id], callback);
  // },
  // updateTask: function(id, Task, callback) {
  //   return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
  // }

};
module.exports = User;
