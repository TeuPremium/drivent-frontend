import styled from 'styled-components';

export default function HotelButton() {
  return (
    <>
      <HotelContainer>
        <ButtonHotelContainer>
          <ImageHotelContainer>
            <img src="https://images.trvl-media.com/hotels/42000000/41500000/41491100/41491098/67e24215_d.jpg" />
          </ImageHotelContainer>
          <SubtitlesContainer>
            <h1>Driven Resort</h1>
            <h2>Tipos de acomodação</h2>
            <h3>Single e Double</h3>
            <h2>Vagas disponíveis</h2>
            <h3>103</h3>
          </SubtitlesContainer>
        </ButtonHotelContainer>
      </HotelContainer>
    </>
  );
}

const HotelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonHotelContainer = styled.div`
  height: 264px;
  width: 196px;
  background-color: #ebebeb;
  border-radius: 5px;
  margin-right: 19px;
`;

const ImageHotelContainer = styled.div`
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
