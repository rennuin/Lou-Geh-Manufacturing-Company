const db = require('../config/database');

const Supplier = {
  getAll: (callback) => {
    db.query('SELECT * FROM suppliers', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM suppliers WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO suppliers SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE suppliers SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM suppliers WHERE id = ?', [id], callback);
  }
};

module.exports = Supplier;
