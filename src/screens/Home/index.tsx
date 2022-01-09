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

  const navigation = useNavigation<any>();

  function handleCarDetails(car: CarDTO){
    navigation.navigate(screens.carDetails, { car });
  }

  useEffect (() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
        // console.log(response);  
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchCars();
  },[])

  useEffect (() => {
    // console.warn(cars[0]);
  },[cars])

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
            onPress={() => handleCarDetails(item)}
          />}
        />
    }
    </Container>
  );
}