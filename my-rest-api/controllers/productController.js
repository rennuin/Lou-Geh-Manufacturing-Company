const productModel = require('../models/productModel');

exports.createProduct = (req, res) => {
  const { name, quantity_on_hand } = req.body;
  productModel.createProduct(name, quantity_on_hand, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating product' });
    res.status(201).json({ message: 'Product created successfully', data: result });
  });
};

exports.getProducts = (req, res) => {
  productModel.getProducts((err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching products' });
    res.status(200).json(results);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  productModel.getProductById(id, (err, result) => {
    if (err || !result.length) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result[0]);
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, quantity_on_hand } = req.body;
  productModel.updateProduct(id, name, quantity_on_hand, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating product' });
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  productModel.deleteProduct(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting product' });
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};
