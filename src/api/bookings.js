// add a bookings
export const addBooking = async (bookingData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // authoncation : `Bearer ${localStorage.getItem('aircnc-token')}`,
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};
