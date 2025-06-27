class ApiService {
  static async submitBooking(data) {
    try {
      const response = await fetch(`${config.apiBaseUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.user?.token}`
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Booking failed');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  static async loadServices() {
    const response = await fetch(`${config.apiBaseUrl}/services`);
    return await response.json();
  }
}