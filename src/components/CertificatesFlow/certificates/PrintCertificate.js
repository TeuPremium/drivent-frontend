import styled from 'styled-components';
import qrCode from '../../../assets/images/qrCode.svg';

export default function PrintableCertificates(prop) {
  return (
    <>
      <CertificateContainer>
        <Head>
          <h1>Certificado de participação da atividade {prop.activity} </h1>
        </Head>
        <Body>
          <h2>
            Certificamos que {prop.user} completou com êxito o workshop {prop.workshop}
          </h2>
        </Body>
        <Identifiers>
          <div>
            <h3>Identificador:</h3>
            <h3>placeholder aaa{prop.id}</h3>
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
  background-image: url(certificateTemplate);
  background-color: blanchedalmond;
  font-family: 'space mono';
  height: 570px;
  width: 840px;
  padding: 35px;
  border-width: 20px;
  border-color: burlywood;
  border-style: double;

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
  margin-top: 100px;
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
