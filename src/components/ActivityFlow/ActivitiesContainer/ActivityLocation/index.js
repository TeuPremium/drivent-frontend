import styled from 'styled-components';
import ActivityCard from './ActivityCard';

export default function ActivityLocation({ activities, selectedDay, setActivities }) {
  return (
    <div>
      <Container>
        {activities &&
          activities.map((a, i) => (
            <ActivityCard
              key={a.id}
              activity={a}
              noVacancy={!a.openSeats}
              selectedDay={selectedDay}
              setActivities={setActivities}
              previousEnd={i !== 0 && activities[i - 1].endsAt}
            />
          ))}
      </Container>
    </div>
  );
}

const Container = styled.ul`
  width: 100%;
  min-height: 390px;
  height: 100%;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  padding: 9px;
`;
