import styled from 'styled-components';
import ActivityLocation from './ActivityLocation';

export default function ActivitiesContainer() {
  return (
    <Container>
      <ActivityLocation locationTitle={'Auditório Principal'} />
      <ActivityLocation locationTitle={'Auditório Lateral'} />
      <ActivityLocation locationTitle={'Sala de Workshop'} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
`;
