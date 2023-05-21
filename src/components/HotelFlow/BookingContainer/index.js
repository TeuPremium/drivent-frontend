import styled from 'styled-components';
import ChosenRoom from './ChosenRoom';
import Button from '../../Form/Button';

export default function Booking({ Bookings, setUpdateBooking }) {
  return (
    <>
      <ChosenRoom Bookings={Bookings} />
      <SelectButton
        onClick={() => {
          setUpdateBooking(true);
        }}
      >
        Trocar Reserva
      </SelectButton>
    </>
  );
}

const SelectButton = styled(Button)`
  color: #e0e0e0;
  width: 182px;
  background: #e0e0e0;
`;
