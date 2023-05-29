import styled from 'styled-components';
import qrCode from '../../../../assets/images/qrCode.svg';

export default function PrintableCertificates(prop) {
  return (
    <>
      <CertificateContainer>
        <Head>
          <h1>Certificado de participação da atividade {prop.activity}. </h1>
        </Head>
        <Body>
          <h2>
            Certificamos que {prop.user} completou com êxito o workshop {prop.activity}.
          </h2>
        </Body>
        <Identifiers>
          <div>
            <h3>Identificador:</h3>

            <img src={qrCode} alt={'qrcode'} width={'135px'} />
          </div>
          <div>
            <h3>Data:</h3>
            <h3>24/05/2023{prop.date}</h3>
          </div>
        </Identifiers>
      </CertificateContainer>
    </>
  );
}

const CertificateContainer = styled.div`
  font-family: 'space mono';
  height: 570px;
  width: 840px;
  padding: 35px;
  border-width: 20px;
  border-color: burlywood;
  border-style: double;
  margin-top: 25px;
  position: relative;
  bottom: 25px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  h1 {
    font-size: xx-large;
  }
  h2 {
    font-size: x-large;
  }
  h3 {
    line-height: 2ex;
    font-size: large;
  }
`;

const Head = styled.div``;

const Body = styled.div`
  margin-top: 100px;
`;

const Identifiers = styled.div`
  position: relative;
  top: 85px;
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  img {
    margin-top: 20px;
  }
  div:nth-of-type(2) {
    display: flex;
    justify-content: end;
    flex-direction: column;
  }
`;
