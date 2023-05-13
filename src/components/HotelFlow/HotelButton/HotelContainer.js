import styled from 'styled-components';
import HotelButton from './HotelButtonComponent';
import useHotel from '../../../hooks/api/useHotel';
import { RoomsContainer } from '../RoomsContainer/RoomsContainer';
import { useState } from 'react';

export default function HotelContainer() {
  const { hotels } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);

  return (
    <>
      <HotelContainerBox>
        {hotels?.map((hotel) => (
          <HotelButton
            key={hotel.id}
            hotel={hotel}
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
            setRooms={setRooms}
          />
        ))}
      </HotelContainerBox>
      {selectedHotel && <RoomsContainer rooms={rooms} />}
    </>
  );
}

const HotelContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
