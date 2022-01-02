import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LogoSvg from '../../assets/logo_background_gray';
import DoneSvg from '../../assets/done';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();

  const navi = useNavigation<any>();

  function handleNavigation() {
    navi.navigate('Home');
  }


  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <LogoSvg width={width}/>
      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugador!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até uma concessionária da RENTX {'\n'}
          pegar seu automóvel 
        </Message>

      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleNavigation}/>
      </Footer>
    </Container>
  );
}