const connection = require('../config/database');

// Create a new product
const createProduct = (name, quantity_on_hand, callback) => {
  const query = 'INSERT INTO products (name, quantity_on_hand) VALUES (?, ?)';
  connection.query(query, [name, quantity_on_hand], (err, results) => {
    callback(err, results);
  });
};

// Get all products
const getProducts = (callback) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (err, results) => {
    callback(err, results);
  });
};

// Get product by ID
const getProductById = (id, callback) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

// Update product by ID
const updateProduct = (id, name, quantity_on_hand, callback) => {
  const query = 'UPDATE products SET name = ?, quantity_on_hand = ? WHERE id = ?';
  connection.query(query, [name, quantity_on_hand, id], (err, results) => {
    callback(err, results);
  });
};

// Delete product by ID
const deleteProduct = (id, callback) => {
  const query = 'DELETE FROM products WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
