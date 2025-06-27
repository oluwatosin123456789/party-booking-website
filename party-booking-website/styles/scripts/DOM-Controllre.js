class DOMController {
  constructor() {
    this.els = {
      bookingForm: document.getElementById('bookingForm'),
      serviceCards: document.querySelectorAll('.service-card'),
      datePicker: document.getElementById('eventDate'),
      guestCounter: document.getElementById('guests')
    };
    
    this.initDatePicker();
    this.addCardHoverEffects();
  }

  initDatePicker() {
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + 14);
    
    this.els.datePicker.min = minDate.toISOString().split('T')[0];
    this.els.datePicker.value = minDate.toISOString().split('T')[0];
  }

  addCardHoverEffects() {
    this.els.serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.querySelector('.service-icon').style.backgroundColor = '#6c63ff';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.querySelector('.service-icon').style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
      });
    });
  }
}