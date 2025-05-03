const supplierModel = require('../models/supplierModel');

exports.createSupplier = (req, res) => {
  const { name, location } = req.body;
  supplierModel.createSupplier(name, location, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating supplier' });
    res.status(201).json({ message: 'Supplier created successfully', data: result });
  });
};

exports.getSuppliers = (req, res) => {
  supplierModel.getSuppliers((err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching suppliers' });
    res.status(200).json(results);
  });
};

exports.getSupplierById = (req, res) => {
  const { id } = req.params;
  supplierModel.getSupplierById(id, (err, result) => {
    if (err || !result.length) return res.status(404).json({ message: 'Supplier not found' });
    res.status(200).json(result[0]);
  });
};

exports.updateSupplier = (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;
  supplierModel.updateSupplier(id, name, location, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating supplier' });
    res.status(200).json({ message: 'Supplier updated successfully' });
  });
};

exports.deleteSupplier = (req, res) => {
  const { id } = req.params;
  supplierModel.deleteSupplier(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting supplier' });
    res.status(200).json({ message: 'Supplier deleted successfully' });
  });
};
