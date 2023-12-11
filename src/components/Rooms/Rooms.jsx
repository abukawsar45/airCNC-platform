import React, { useEffect, useState } from 'react'
import Container from '../../shared/Container'
import Card from './Card';
import Loader from '../../shared/Loader';
import { useSearchParams } from 'react-router-dom';

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  
  useEffect(() => {
    setLoading(true);
    fetch('./roomsData.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (category) {
          console.log(category);
          const filtered = data.filter(room => room.category === category )
          console.log(data);
          console.log('ine2', filtered);
          setRoomsData(filtered);
        } else
        {
          
        setRoomsData(data);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);
  
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