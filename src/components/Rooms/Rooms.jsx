import React, { useEffect, useState } from 'react'
import Container from '../../shared/Container'
import Card from './Card';
import Loader from '../../shared/Loader';

const Rooms = () => {
  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  
  useEffect(() => {
    setLoading(true);
    fetch('./roomsData.json').then(res=>res.json()).then(data=>{
      console.log(data)
      setRoomsData(data);
      setLoading(false);
    }).catch(err=>console.log(err))
  },[] )
  
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <p>{roomsData?.length} </p>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
        {
          roomsData?.map((room, index, d)=> <Card key={index} room={room} /> )
        }
      </div>
    </Container>
  )
}

export default Rooms