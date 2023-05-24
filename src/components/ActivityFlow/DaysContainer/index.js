import { useContext } from 'react';
import EventInfoContext from '../../../contexts/EventInfoContext';
import DayButton from './DayButton';
import styled from 'styled-components';

export default function DaysContainer({ selectedDay, setSelectedDay }) {
  const { eventInfo: event } = useContext(EventInfoContext);
  const daysArray = createDaysArray(event.startsAt, event.endsAt);

  return (
    <Container>
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
  flex-wrap: wrap;
`;
