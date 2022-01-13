import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import theme from '../../styles/theme';
import { Calendar, DayProps, MarkedDateProps, generateInterval } from '../../components/Calendar';
import { format } from 'date-fns';

import ArrowSvg from '../../assets/arrow';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';
import { Button } from '../../components/Button';
import { screens } from '../../global/routes';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
      Alert.alert("Selecione o intervalo para alugar");
    }else {
      navigation.navigate(screens.schedulingDetails, {
        car,
        dates: Object.keys(markedDates)
      });  
    }
  }

  function handleBack(){
    navigation.goBack();    
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    console.log(interval)

    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({               
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
  }


  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle={'light-content'}
          backgroundColor='transparent'
          translucent={true}
        />

        <BackButton
          onPress={handleBack} 
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected= {!!rentalPeriod.endFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
         <ArrowSvg/>
         <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected= {!!rentalPeriod.endFormatted}>
            {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates} 
          onDayPress={handleChangeDate}/>
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}