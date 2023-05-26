import styled from 'styled-components';
import CertificateCard from './certificateCard';
import { Typography } from '@material-ui/core';
import PrintableCertificate from './PrintCertificate';

export default function Certificates() {
  const name = 'Worksohop de assembly';

  return (
    <>
      <div>
        <StyledTypography>Aqui estão seus certificados: </StyledTypography>
      </div>
      <CertificatesContainer>
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
        <CertificateCard name={name} />
      </CertificatesContainer>
    </>
  );
}

const CertificatesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 264px;
  box-sizing: content-box;
  overflow-x: scroll;
  margin-top: 30px;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
`;
const StyledTypography = styled(Typography)`
  color: #8e8e8e;
  width: 100%;
  margin-bottom: 14px;
`;
