const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rennan040793!', // Your MySQL password
  database: 'RennanMySQL80'  // Replace with your actual database name
});

// Connect to MySQL and handle errors
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Route to get all suppliers
router.get('/', (req, res) => {
  const query = 'SELECT * FROM suppliers';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching suppliers:', err);
      return res.status(500).json({ message: 'Error fetching suppliers', error: err });
    }
    res.json(results); // Send the supplier data as JSON response
  });
});

// Route to add a new supplier
router.post('/', (req, res) => {
  const { name, contact_person, email, phone_number, address } = req.body;

  // Check if all required fields are present
  if (!name || !contact_person || !email || !phone_number || !address) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // SQL query for inserting a new supplier
  const query = 'INSERT INTO suppliers (name, contact_person, email, phone_number, address) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, contact_person, email, phone_number, address], (err, result) => {
    if (err) {
      console.error('Error inserting supplier:', err);
      return res.status(500).json({ message: 'Error inserting supplier', error: err });
    }
    res.status(201).json({ message: 'Supplier added successfully', supplierId: result.insertId });
  });
});

module.exports = router;
