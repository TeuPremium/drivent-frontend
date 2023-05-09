import { useState } from 'react';
import styled from 'styled-components';
import instance from '../../../services/api';
export default function Payment() {
  const [color, setColor] = useState('#FFEED2');

  return (
    <>
      <Container backgroundColor={color}>
        <TextContainer>'Pagamento: Em brevers!'</TextContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};

  width: 145px;
  height: 145px;
  left: 341px;
  top: 323px;

  border: 1px solid #cecece;
  border-radius: 20px;
`;

const TextContainer = styled.div``;
