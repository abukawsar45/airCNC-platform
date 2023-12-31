import React, { useContext, useState } from 'react';
import AddRoomForm from '../components/Dashboard/AddRoomForm';
import { imageUpload } from '../api/utils';
import { AuthContext } from '../providers/AuthProvider';
import { addRoom } from '../api/rooms';

const AddRoom = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
  const [dates, setDates] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',});

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const guests = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];

    // upload image
    imageUpload(image).then(data => {
      // console.log(data)
      const roomData = {
        location,
        title,
        from,
        to,
        price,
        guests,
        bedrooms,
        bathrooms,
        description,
        category,
        image: data.data.display_url,
        host: {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email
        }
      };
      console.log(roomData);

      // post room data booking
      addRoom(roomData).then(data => console.log(data)).catch(error => {
        console.log(error)
      })
      setLoading(false);
    }).catch(error => {
      console.log(error.message)
      setLoading(false);
    })

    // console.log('first');

  }

  const handleImageChange = image => {
    setUploadButtonText(image.name);
  }

  const handleDates = ranges => {
    console.log(ranges.selection);
    setDates(ranges.selection)
  }

  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        uploadButtonText={uploadButtonText}
        handleImageChange={handleImageChange}
        dates={dates}
        handleDates={handleDates}
      />
    </div>
  );
};

export default AddRoom;