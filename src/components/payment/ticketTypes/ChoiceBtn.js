import styled from 'styled-components';
import { useState } from 'react';

export default function ChoiceBtn(prop) {
  function changeColor() {
    // prop.selected ? setColor('') : setColor('#FFEED2');
  }
  const color = prop.selected;

  return (
    <>
      <Container backgroundColor={color} onClick={() => changeColor()}>
        <TextContainer>
          <h1>{prop.name}</h1>
          <h2>{prop.price}</h2>
        </TextContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 145px;
  height: 145px;
  left: 341px;
  top: 323px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #cecece;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  height: 38px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #898989;
  }
`;
