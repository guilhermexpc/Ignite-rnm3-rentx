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
import { View, Text } from 'react-native';

interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;
  // console.log(car);

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
          imagesUrl={car.photos}
        />
      </CarImages>

    <Content>
      <Details>
        <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name}</Name>
        </Description>
        
        <Rent>
          <Period>{car.period}</Period>
          <Price>{car.price}</Price>
        </Rent>
      </Details>    
      
      <Accessories>
        {
          car.accessories.map(item =>             
            <Accessory name={item.name} icon={SpeedSvg}/>
          )
        }
      </Accessories>

      <About>{car.about}</About>
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