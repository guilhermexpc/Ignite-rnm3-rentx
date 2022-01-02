import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import theme from '../../styles/theme';
import { Calendar } from '../../components/Calendar';

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

export function Scheduling(){
  
  const navi = useNavigation<any>();

  function handleNavigation() {
    navi.navigate(screens.schedulingDetails);
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
          onPress={()=> {}} 
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
            <DateValue selected= {false}>
              18/06/2021
            </DateValue>
          </DateInfo>
         <ArrowSvg/>
         <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected= {false}>
              18/06/2021
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title='Confirmar' onPress={handleNavigation}/>
      </Footer>
    </Container>
  );
}