const sqlite3 = require('sqlite3');

class db_conn {
  constructor(db_path) {
    this.db = new sqlite3.Database(db_path, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  async get(query, params) {
    return new Promise((resolve, reject) => {
      this.db.get(query, params, function (err, rows) {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  async all(query, params) {
    return new Promise((resolve, reject) => {
      this.db.all(query, params, function (err, rows) {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  async run(query, params) {
    return new Promise((resolve, reject) => {
      this.db.run(query, params, function (err, rows) {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }
}

let db = new db_conn('demoDB.sqlite');

module.exports = {
  db,
};