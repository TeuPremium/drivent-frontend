import styled from 'styled-components';
import HotelButton from './HotelButtonComponent';
import useHotel from '../../hooks/api/useHotel';

export default function HotelContainer() {
  const { hotels } = useHotel();
  console.log(hotels);

  return (
    <>
      <HotelContainerBox>
        {hotels?.map((hotel) => (
          <HotelButton key={hotel.id} hotel={hotel} />
        ))}
      </HotelContainerBox>
    </>
  );
}

const HotelContainerBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
