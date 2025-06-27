document.addEventListener('DOMContentLoaded', () => {
  // Initialize core systems
  new BookingManager();
  new ScrollAnimator();
  
  // Load services dynamically
  ApiService.loadServices()
    .then(services => {
      // Render services
    })
    .catch(console.error);
  
  // Check for returning user
  if (state.user) {
    // Update UI
  }
});