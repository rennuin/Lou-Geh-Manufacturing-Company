const Component = require('../models/componentModel');

exports.getAll = (req, res) => {
  Component.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Component.getById(req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  Component.create(req.body, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
};

exports.update = (req, res) => {
  Component.update(req.params.id, req.body, (err) => {
    if (err) throw err;
    res.json({ message: 'Component updated' });
  });
};

exports.delete = (req, res) => {
  Component.delete(req.params.id, (err) => {
    if (err) throw err;
    res.json({ message: 'Component deleted' });
  });
};
