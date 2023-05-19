import styled from 'styled-components';
import RoomButton from '../RoomButton/RoomButton';
import Button from '../../Form/Button';
import { toast } from 'react-toastify';
import { changeBooking, createBooking } from '../../../services/bookingApi';
import useToken from '../../../hooks/useToken';

export function RoomsContainer({ rooms, selectedRoom, setSelectedRoom, updateBooking }) {
  const token = useToken();

  async function handleClick() {
    try {
      if (updateBooking) await changeBooking(updateBooking, { roomId: selectedRoom }, token);
      else await createBooking({ roomId: selectedRoom }, token);

      toast('Quarto reservado com sucesso! :)');
    } catch (error) {
      toast('Não foi possível reservar o quarto!');
    }
  }

  return (
    <>
      <TextRow>Ótima pedida! Agora escolha seu quarto:</TextRow>
      <RoomsDiv>
        {rooms?.map((room) => (
          <RoomButton key={room.id} room={room} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
        ))}
      </RoomsDiv>
      {selectedRoom && (
        <SelectButton onClick={handleClick}>{updateBooking ? 'Trocar reserva' : 'Reservar Quarto'}</SelectButton>
      )}
    </>
  );
}

const RoomsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const TextRow = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 30px;
  color: #8e8e8e;
`;

const SelectButton = styled(Button)`
  width: 182px;
`;
