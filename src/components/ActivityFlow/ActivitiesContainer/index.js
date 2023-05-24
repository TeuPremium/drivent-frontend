import styled from 'styled-components';
import ActivityLocation from './ActivityLocation';
import DaysContainer from '../DaysContainer';
import { useEffect, useState } from 'react';
import useActivity from '../../../hooks/api/useActivity';
import { toast } from 'react-toastify';
import useActivityLocation from '../../../hooks/api/useActivityLocation';
import useEvent from '../../../hooks/api/useEvent';

export default function ActivitiesContainer() {
  const { getActivities } = useActivity();
  const { event } = useEvent();
  const { activityLocations } = useActivityLocation();

  const [selectedDay, setSelectedDay] = useState(null);
  const [activities, setActivities] = useState(null);
  
  useEffect(async() => {
    if (selectedDay) {
      const [day, layoutMonth] = selectedDay.split('/');
      const year = new Date(event.startsAt).getUTCFullYear();

      const month = layoutMonth - 1;

      const queryString = new URLSearchParams({ day, month, year }).toString();

      try {
        const activitiesData = await getActivities(queryString);

        setActivities(activitiesData);
      } catch (error) {
        toast('Erro ao selecionar o dia das atividades');
      }
    }
  }, [selectedDay]);

  return (
    <>
      <DaysContainer selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

      {selectedDay && activities ? (
        <Container>
          {activityLocations.map(({ id, name }) => (
            <ActivityLocation key={id} locationTitle={name} activities={activities[id]} />
          ))}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
`;

/*

ticketLoading || enrollmentLoading || ticketTypesLoading ? (
    <LoadingContainer />
  ) : (
*/
