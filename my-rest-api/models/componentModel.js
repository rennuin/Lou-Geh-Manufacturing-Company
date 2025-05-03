const connection = require('../config/database');

// Create a new component
const createComponent = (name, description, callback) => {
  const query = 'INSERT INTO components (name, description) VALUES (?, ?)';
  connection.query(query, [name, description], (err, results) => {
    callback(err, results);
  });
};

// Get all components
const getComponents = (callback) => {
  const query = 'SELECT * FROM components';
  connection.query(query, (err, results) => {
    callback(err, results);
  });
};

// Get component by ID
const getComponentById = (id, callback) => {
  const query = 'SELECT * FROM components WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

// Update component by ID
const updateComponent = (id, name, description, callback) => {
  const query = 'UPDATE components SET name = ?, description = ? WHERE id = ?';
  connection.query(query, [name, description, id], (err, results) => {
    callback(err, results);
  });
};

// Delete component by ID
const deleteComponent = (id, callback) => {
  const query = 'DELETE FROM components WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

module.exports = { createComponent, getComponents, getComponentById, updateComponent, deleteComponent };
