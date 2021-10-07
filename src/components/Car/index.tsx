import React from 'react';

import GasoilineSVG from '../../assets/gasoline.svg'

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  GasolineSVG,
  CarImage,
} from './styled';

export function Car(){
  return (
    <Container>
      <Details>
        <Brand>AUDI</Brand>
        <Name>RS 5 Coupé</Name>
        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>       

          <Type> 
            <GasoilineSVG />
          </Type>
        </About>
      </Details>

      <CarImage source={{uri: ''}}/>
    </Container>
  );
}