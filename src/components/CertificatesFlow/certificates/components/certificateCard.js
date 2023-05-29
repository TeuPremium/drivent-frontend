import styled from 'styled-components';
import certificate from '../../../../assets/images/istockphoto-1316195221-612x612.jpg';

export default function CertificateCard(prop) {
  const { name } = prop;

  return (
    <Container>
      <CardContainer>
        <CertificateImageContainer>
          <img src={certificate} alt="certificate icon" />
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
    height: 130px;
    padding-top: 16px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const SubtitlesContainer = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 20px;
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
