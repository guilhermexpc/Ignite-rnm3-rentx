import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

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

import { CarDTO } from '../../dtos/CarDTO';
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
import { screens } from '../../global/routes';

interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;
  console.log(car);

  function handleConfirmRental() {
    navigation.navigate(screens.scheduling);
  }

  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
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