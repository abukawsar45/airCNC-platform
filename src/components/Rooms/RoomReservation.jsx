import Calender from '../Rooms/Calender';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingModal from '../Modal/BookingModal';
import { formatDistance } from 'date-fns';

const RoomReservation = ({ roomData }) => {
  const { user, role, setRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  // price calculation
  const totalPrice = parseFloat(
    formatDistance(new Date(roomData.to), new Date(roomData.from)).split(' ')[0]
  ) * roomData?.price ;

  console.log(totalPrice)

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: 'selection'
  })

  // booking state
  const [bookingInfo, setBookingInfo] = useState({
    guest: {name: user?.displayName, email: user?.email, image: user?.photoURL },
    host: roomData?.host?.email,
    location: roomData?.location,
    price: totalPrice,
    to: value?.endDate,
    from: value?.startDate

  });

  // Date handle selection
  const handleSelect = (ranges) => {
    setValue({...value})
  }


  const modalHandler = () => {
    console.log('booking reserve btn')
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {roomData?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center items-center'>
        <Calender value={value} handleSelect={handleSelect} />
      </div>
      <hr />
      <div className='p-4'>
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData?.host?.email === user?.email}
          label='Reserve'
        />
      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        modalHandler={modalHandler}
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
    </div>
  );
};

export default RoomReservation;
