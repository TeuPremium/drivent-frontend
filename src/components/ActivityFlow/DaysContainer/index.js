import { useContext } from 'react';
import EventInfoContext from '../../../contexts/EventInfoContext';
import DayButton from './DayButton';
import styled from 'styled-components';

export default function DaysContainer({ selectedDay, setSelectedDay }) {
  const { eventInfo: event } = useContext(EventInfoContext);
  const daysArray = createDaysArray(event.startsAt, event.endsAt);

  const handleWheelScroll = (event) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY > 0 ? 100 : -100;
    container.scrollLeft += scrollAmount;
  };
  return (
    <Container onWheel={handleWheelScroll}>
      {daysArray.map((day) => (
        <DayButton key={day.day} data={day} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      ))}
    </Container>
  );
}

function createDaysArray(startsAt, endsAt) {
  const startDate = new Date(startsAt);
  const endDate = new Date(endsAt);
  let daysArray = [];

  const dayInMillis = 24 * 60 * 60 * 1000;

  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  function formatWeekdayAndDay(date) {
    return {
      weekDay: weekDays[date.getUTCDay()],
      day: `${date.getUTCDate()}/${date.getUTCMonth() + 1}`,
    };
  }

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const formattedDate = formatWeekdayAndDay(currentDate);
    daysArray.push(formattedDate);

    currentDate = new Date(currentDate.getTime() + dayInMillis);
  }

  return daysArray;
}

const Container = styled.div`
  margin-top: 27px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #e8e8e8 transparent;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e8e8e8;
    border-radius: 15px;
    border: 6px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
`;
