// Configuration Object
const config = {
  apiBaseUrl: 'https://api.italawa.com/v1',
  localStorageKey: 'italawa_booking_data',
  animationDuration: 800,
  maxGuests: 500
};

// State Management
class AppState {
  constructor() {
    this.bookingData = JSON.parse(localStorage.getItem(config.localStorageKey)) || {
      contact: {},
      event: {},
      services: []
    };
    this.user = null;
    this.cartTotal = 0;
  }

  save() {
    localStorage.setItem(config.localStorageKey, JSON.stringify(this.bookingData));
    return this;
  }
}

const state = new AppState();