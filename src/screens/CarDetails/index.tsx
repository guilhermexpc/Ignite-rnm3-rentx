import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  // Details,
  // Description,
  // Brand,
  // Name,
  // Rent,
  // Period,
  // Price,
  // About,
  // Accessories,
  // Footer,
  // OfflineInfo
} from './styles';

export function CarDetails(){
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
    </Container>
  );
}