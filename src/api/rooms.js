// add a room
export const addRoom = async roomData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // authoncation : `Bearer ${localStorage.getItem('aircnc-token')}`,
    },
    body : JSON.stringify(roomData)
  })
  const data = await response.json()
  return data
}


// get all rooms
export const getAllRooms = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
  const data = await response.json()
  return data
}

// get filtered rooms for hosts
export const getRooms = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`);
  const data = await response.json();
  return data;
};

//get single room
export const getRoom = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
  const data = await response.json()
  return data
}
// delete rooms
export const deleteRooms = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
};