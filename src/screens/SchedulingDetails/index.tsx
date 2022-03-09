import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import { DateInfo, DateTitle, DateValue, RentalPeriod } from '../Scheduling/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { screens } from '../../global/routes';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { format } from 'date-fns';

// [SVGs]
import SpeedSvg from '../../assets/speed.svg';

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
import { getPlatformDate } from '../../utils/getPlatformDate';
import { Car } from '../../components/Car';
import { api } from '../../services/api';



interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails(){

  const theme = useTheme();
  const route = useRoute();

  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const { car, dates } = route.params as Params;
  const navigation = useNavigation<any>();

  const rentTotal = Number(dates.length * car.rent.price);
  

  function handleNavigation() {
    navigation.navigate(screens.schedulingComplete);
  }

  function handleBack(){
    navigation.goBack();
  }

  async function handleConfirmRental() {
    setLoading(true);

    await api.post('/rentals', {      
      user_id: 1,
      car_id: car.id,
      start_date: new Date(),
      end_date: new Date(),
      total: rentTotal
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'Home',
        title: 'Carro alugado!',
        message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`
      })
    })
    .catch((erro) => {
      setLoading(false);
      Alert.alert('Não foi possível confirmar o agendamento.')
    })
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end:  format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  },[])

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
          car.accessories.map(acessory =>             
            <Accessory 
              key={acessory.type}
              name={acessory.name} 
              icon={getAccessoryIcon(acessory.type)}
            />
          )
        }
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
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

        <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
        />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
      </RentalPeriod>

      <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
          <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

    </Content>

    <Footer>
        <Button 
          title="Alugar agora" 
          color={theme.colors.success} 
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>

 
  );
}