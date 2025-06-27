class FormValidator {
  static validateBookingForm(formData) {
    const errors = {};
    
    // Name validation
    if (!formData.fullName?.trim()) {
      errors.fullName = 'Required field';
    } else if (formData.fullName.length < 3) {
      errors.fullName = 'Minimum 3 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    // Date validation
    const selectedDate = new Date(formData.eventDate);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 14);
    
    if (selectedDate < minDate) {
      errors.eventDate = 'Must be at least 2 weeks in advance';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}