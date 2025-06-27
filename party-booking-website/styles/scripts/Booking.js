class BookingManager {
  constructor() {
    this.dom = new DOMController();
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.dom.els.bookingForm.addEventListener('submit', this.handleSubmit.bind(this));
    
    this.dom.els.guestCounter.addEventListener('input', (e) => {
      if (e.target.value > config.maxGuests) {
        e.target.value = config.maxGuests;
        this.showToast(`Maximum ${config.maxGuests} guests`);
      }
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
      fullName: this.dom.els.bookingForm.elements.fullName.value,
      email: this.dom.els.bookingForm.elements.email.value,
      eventType: this.dom.els.bookingForm.elements.eventType.value,
      guests: this.dom.els.bookingForm.elements.guests.value,
      eventDate: this.dom.els.bookingForm.elements.eventDate.value,
      message: this.dom.els.bookingForm.elements.message.value
    };
    
    const validation = FormValidator.validateBookingForm(formData);
    
    if (!validation.isValid) {
      this.displayErrors(validation.errors);
      return;
    }
    
    try {
      this.showLoader();
      const booking = await ApiService.submitBooking(formData);
      this.showSuccess(booking);
      state.bookingData = {};
      state.save();
    } catch (error) {
      this.showError(error);
    } finally {
      this.hideLoader();
    }
  }

  showToast(message) {
    // Implementation for toast notifications
  }
  
  showLoader() {
    // Loading spinner implementation
  }
}