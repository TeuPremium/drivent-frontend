import ReactLoading from 'react-loading';
import styled from 'styled-components';

export default function LoadingContainer() {
  return (
    <LoadingBox>
      <ReactLoading type="bubbles" color="#000000" height={100} width={100} />
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
