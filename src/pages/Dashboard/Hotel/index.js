import styled from 'styled-components';
import HotelFlow from '../../../components/HotelFlow';

export default function Hotel() {
  return (
    <Page>
      <HotelFlow />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
