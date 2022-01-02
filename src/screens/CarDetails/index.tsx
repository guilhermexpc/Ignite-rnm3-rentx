import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

// [SVGs]
import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
  // OfflineInfo
} from './styles';

export function CarDetails(){
  const navi = useNavigation<any>();

  function handleConfirmRental() {
    navi.navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={()=> {}}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://e7.pngegg.com/pngimages/796/507/png-clipart-audi-rs-4-audi-a4-allroad-quattro-car-audi-rs-6-audi-compact-car-sedan.png']}
        />
      </CarImages>

    <Content>
      <Details>
        <Description>
          <Brand>Brand</Brand>
          <Name>Name</Name>
        </Description>
        
        <Rent>
          <Period>Period</Period>
          <Price>Price</Price>
        </Rent>
      </Details>    

      
      <Accessories>
        <Accessory name="380Km/h" icon={SpeedSvg}/>
        <Accessory name="3.2s" icon={AccelerationSvg}/>
        <Accessory name="800 HP" icon={ForceSvg}/>
        <Accessory name="Gasolina" icon={GasolineSvg}/>
        <Accessory name="Auto" icon={ExchangeSvg}/>
        <Accessory name="2 Pessoas" icon={PeopleSvg}/>
      </Accessories>

      <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          libero earum ab quia officia illum pariatur
          eligendi ut possimus dolorum, perspiciatis magni,
          ipsam tempora deleniti.
      </About>
    </Content>

    <Footer>
      <Button 
          title="Escolher período do aluguel" 
          onPress={handleConfirmRental}
          enabled={true}          
        />
    </Footer>

    </Container>

 
  );
}