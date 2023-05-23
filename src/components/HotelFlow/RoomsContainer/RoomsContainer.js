import styled from 'styled-components';
import { useState } from 'react';
import RoomButton from '../RoomButton/RoomButton';

export function RoomsContainer({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  return (
    <>
      <TextRow>Ótima pedida! Agora escolha seu quarto:</TextRow>
      <RoomsDiv>
        {rooms?.map((room) => (
          <RoomButton key={room.id} room={room} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
        ))}
      </RoomsDiv>
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
  margin-bottom: 12px;
  margin-top: 20px;
  color: #8e8e8e;
`;
