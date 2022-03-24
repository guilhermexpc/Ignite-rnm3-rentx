import React from 'react';
import { Button, StyleSheet, Dimensions} from 'react-native';

import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';

const windownWidth = Dimensions.get('window').width;

import {
  Container
} from './styles';

export function Splash(){
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(.97,.06,.59,1.05)
          })
        } 
      ]      
    }
  })

  function handleAnimationPositon() {
    animation.value = Math.random() * (windownWidth - 100);
  }

  return (
    <Container>
      <Animated.View style={[stylesTemp.box, animatedStyles]}/>
      
      <Button title="Mover" onPress={handleAnimationPositon} />
    </Container>
  );
}

const stylesTemp = StyleSheet.create({
  box: { 
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})