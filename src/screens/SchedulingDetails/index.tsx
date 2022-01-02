import React from 'react';
import { Feather } from '@expo/vector-icons'

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

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
  Accessories,
  Footer,
  CalendarIcon,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
  // OfflineInfo
} from './styles';
import { DateInfo, DateTitle, DateValue, RentalPeriod } from '../Scheduling/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){

  const theme = useTheme();

  const navi = useNavigation<any>();

  function handleNavigation() {
    navi.navigate('SchedulingComplete');
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

      <RentalPeriod>
        <CalendarIcon>
          <Feather 
            name='calendar'
            size={RFValue(24)}
            color={theme.colors.text}
          />
        </CalendarIcon>
        
        <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>02/01/2022</DateValue>
          </DateInfo>

        <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
        />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{'02/01/2022'}</DateValue>
          </DateInfo>
      </RentalPeriod>

      <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ 580 x10 diárias`}</RentalPriceQuota>
            <RentalPriceTotal>{'R$ 5000'}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

    </Content>

    <Footer>
      <Button 
          title="Alugar agora" 
          color={theme.colors.success}
          onPress={handleNavigation}
          enabled={true}          
        />
    </Footer>

    </Container>

 
  );
}