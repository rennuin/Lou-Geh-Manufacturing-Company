function validateProduct(data) {
    if (!data.name || !data.quantity_on_hand) {
      return { valid: false, message: 'Missing required product fields.' };
    }
    return { valid: true };
  }
  
  function validateComponent(data) {
    if (!data.name || !data.description) {
      return { valid: false, message: 'Missing required component fields.' };
    }
    return { valid: true };
  }
  
  function validateSupplier(data) {
    if (!data.name || !data.contact_info) {
      return { valid: false, message: 'Missing required supplier fields.' };
    }
    return { valid: true };
  }
  
  module.exports = {
    validateProduct,
    validateComponent,
    validateSupplier
  };
  