import HotelButton from '../../../components/HotelButton/HotelButtonComponent';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function Hotel() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
      <HotelButton />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
