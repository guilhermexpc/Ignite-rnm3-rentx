import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Bullet } from '../Bullet';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

// interface Props {
//   imagesUrl: {
//     id: string;
//     photo: string;
//   }[];
// }

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({imagesUrl}: Props){ 
  const [imageIndex, setImageIndex] = useState(0); 

  const indexChanged = useRef((info: ChangeImageProps) => {
    console.log(info)
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex 
            key={String(index)}
            active={index === imageIndex}
          />
        ))}
      </ImageIndexes>

      
        <FlatList
          data={imagesUrl}
          keyExtractor={key => key}
          renderItem={({ item }) => (
            <CarImageWrapper>
              <CarImage
              source={{ uri: item}}
              resizeMode="contain"
              />  
            </CarImageWrapper>          
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />

       
   

    </Container>
  );
}