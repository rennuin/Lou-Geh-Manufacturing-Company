// Simulate a data structure for products, components, and suppliers
let products = [];
let components = [];
let suppliers = [];

// Load products from the array and display them
function loadProducts() {
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';

  if (products.length === 0) {
    productsList.innerHTML = '<p>No products available.</p>';
  } else {
    products.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
        <strong>Name:</strong> ${product.name} <br>
        <strong>Quantity:</strong> ${product.quantity} <br>
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      `;
      productsList.appendChild(productDiv);
    });
  }
}

// Add a new product to the list
function showAddProductForm() {
  const form = document.getElementById('add-product-form');
  form.style.display = 'block';
}

// Cancel adding new product
function cancelAddProduct() {
  const formDiv = document.getElementById('add-product-form');
  
  formDiv.classList.add('fade-out');
  setTimeout(() => {
    formDiv.style.display = 'none';
    formDiv.classList.remove('fade-out');
    document.getElementById('product-form').reset(); // Clears form inputs
  }, 400);
}

// Save the new product to the array
document.getElementById('product-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productQuantity = document.getElementById('product-quantity').value;

  if (productName && productQuantity) {
    products.push({ name: productName, quantity: parseInt(productQuantity) });

    loadProducts(); // Reload products list
    cancelAddProduct(); // Close the form
  } else {
    alert('Please fill out all fields.');
  }
});

// Edit product details
function editProduct(index) {
  const product = products[index];
  const newQuantity = prompt(`Edit quantity for ${product.name}:`, product.quantity);

  if (newQuantity !== null && newQuantity !== '') {
    products[index].quantity = parseInt(newQuantity);
    loadProducts(); // Reload products list after edit
  }
}

// Delete a product from the list
function deleteProduct(index) {
  if (confirm(`Are you sure you want to delete ${products[index].name}?`)) {
    products.splice(index, 1);
    loadProducts(); // Reload products list after deletion
  }
}

// Load components (dummy data for now)
function loadComponents() {
  const componentsList = document.getElementById('components-list');
  componentsList.innerHTML = '';

  if (components.length === 0) {
    componentsList.innerHTML = '<p>No components available.</p>';
  } else {
    components.forEach((component) => {
      const componentDiv = document.createElement('div');
      componentDiv.innerHTML = `
        <strong>Component Name:</strong> ${component.name} <br>
        <strong>Type:</strong> ${component.type}
      `;
      componentsList.appendChild(componentDiv);
    });
  }
}

// Load suppliers (fetch data from MySQL via API)
function loadSuppliers() {
  const suppliersList = document.getElementById('suppliers-list');
  suppliersList.innerHTML = '<p>Loading suppliers...</p>';

  fetch('/api/suppliers')  // Make an API call to fetch suppliers from MySQL
    .then(response => response.json())
    .then(data => {
      suppliersList.innerHTML = '';  // Clear the loading message

      if (data.length === 0) {
        suppliersList.innerHTML = '<p>No suppliers available.</p>';
      } else {
        data.forEach((supplier) => {
          const supplierDiv = document.createElement('div');
          supplierDiv.innerHTML = `
            <strong>Supplier Name:</strong> ${supplier.name} <br>
            <strong>Location:</strong> ${supplier.location}
          `;
          suppliersList.appendChild(supplierDiv);
        });
      }
    })
    .catch(error => {
      suppliersList.innerHTML = '<p>Error loading suppliers.</p>';
      console.error('Error fetching suppliers:', error);
    });
}

// Initialize and load the data when the page is loaded
window.onload = function() {
  loadProducts();
  loadComponents();
};

// Event listener for the "Load Suppliers" button
document.getElementById('load-suppliers-btn').addEventListener('click', loadSuppliers);
