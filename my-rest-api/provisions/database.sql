CREATE DATABASE IF NOT EXISTS lougeh_manufacturing;
USE lougeh_manufacturing;

-- Suppliers table
CREATE TABLE IF NOT EXISTS suppliers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact VARCHAR(100),
  address TEXT
);

-- Components table
CREATE TABLE IF NOT EXISTS components (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  quantity INT DEFAULT 0
);

-- Junction table for product-components relationship
CREATE TABLE IF NOT EXISTS product_components (
  product_id INT NOT NULL,
  component_id INT NOT NULL,
  PRIMARY KEY (product_id, component_id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (component_id) REFERENCES components(id) ON DELETE CASCADE
);

-- Junction table for component-suppliers relationship
CREATE TABLE IF NOT EXISTS component_suppliers (
  component_id INT NOT NULL,
  supplier_id INT NOT NULL,
  PRIMARY KEY (component_id, supplier_id),
  FOREIGN KEY (component_id) REFERENCES components(id) ON DELETE CASCADE,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
);

-- Sample data
INSERT INTO suppliers (name, contact, address) VALUES 
('ABC Supplies', 'John Doe', '123 Main St'),
('XYZ Components', 'Jane Smith', '456 Oak Ave');

INSERT INTO components (name, description) VALUES 
('Bolt', '5mm steel bolt'),
('Nut', '5mm steel nut'),
('Washer', '5mm steel washer'),
('Bearing', 'Ball bearing 10mm');

INSERT INTO products (name, quantity) VALUES 
('Widget A', 100),
('Widget B', 50);

INSERT INTO product_components (product_id, component_id) VALUES 
(1, 1), (1, 2), (1, 3),
(2, 1), (2, 4);

INSERT INTO component_suppliers (component_id, supplier_id) VALUES 
(1, 1), (1, 2),
(2, 1), (3, 1), (4, 2);