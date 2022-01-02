import React from 'react';
import { StatusBar, View, Text, Button } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export function Home(){

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Bata',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://e7.pngegg.com/pngimages/796/507/png-clipart-audi-rs-4-audi-a4-allroad-quattro-car-audi-rs-6-audi-compact-car-sedan.png',
  }

    const navi = useNavigation<any>();

    function handleCarDetails(){
      navi.navigate('CarDetails');
    }

   function renderCard () {
    return (
      <Car data={carData}/>
    )
  }

  return (
    <Container>     
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          
          <TotalCars>
            Total XX carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
        <Car 
          data={carData} 
          onPress={() =>handleCarDetails()}
        />}
      />
      
    </Container>
  );
}