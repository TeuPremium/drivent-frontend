import styled from 'styled-components';

export default function CertificateCard(prop) {
  const { name } = prop;

  return (
    <Container>
      <CardContainer>
        <CertificateImageContainer>
          <img src="https://cdn-icons-png.flaticon.com/512/7238/7238706.png" alt="certificate icon" />
        </CertificateImageContainer>
        <SubtitlesContainer>
          <h2>Evento certificado:</h2>
          <h1>{name}</h1>
        </SubtitlesContainer>
      </CardContainer>
    </Container>
  );
}

const CardContainer = styled.div`
  height: 264px;
  width: 196px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  border-radius: 5px;
  margin-right: 19px;
  margin-bottom: 19px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CertificateImageContainer = styled.div`
  height: 109px;
  width: 168px;
  border-radius: 5px;
  margin-right: 14px;
  margin-left: 14px;
  img {
    width: 168px;
    height: 109px;
    padding-top: 16px;
    border-radius: 5px;
  }
`;

const SubtitlesContainer = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 10px;
  }

  h2 {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-top: 10px;
  }

  h3 {
    font-size: 12px;
    font-weight: 400px;
    line-height: 14px;
    margin-top: 2px;
  }
`;
