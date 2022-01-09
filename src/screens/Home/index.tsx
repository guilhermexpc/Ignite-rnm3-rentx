import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text, Button } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';
import { screens } from '../../global/routes';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

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
      navi.navigate(screens.carDetails);
    }

   function renderCard () {
    return (
      <Car data={carData}/>
    )
  }

  useEffect (() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
        console.log(response);  
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchCars();
  },[])

  

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

      { loading ? 
        <Load /> 
      :
        <CarList 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
          <Car 
            data={item} 
            onPress={() =>handleCarDetails()}
          />}
        />
    }
    </Container>
  );
}