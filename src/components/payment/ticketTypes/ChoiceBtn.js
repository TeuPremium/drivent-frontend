import styled from 'styled-components';

export default function ChoiceBtn(prop) {
  const name = prop.name || prop.ticket.name;

  if (!prop.ticket) {
    return (
      <>
        <Container>
          <TextContainer>
            <h1>{'ticket unavailable, try refreshing'}</h1>
          </TextContainer>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <TextContainer>
          <h1>{name}</h1>
          <h2>
            {prop.lowerOption ? '+ ' : ''}R${' '}
            {prop.lowPriceTicket ? prop.ticket.price - prop.lowPriceTicket : prop.ticket.price}
          </h2>
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
