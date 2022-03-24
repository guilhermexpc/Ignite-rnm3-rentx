import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing, 
  interpolate, 
  Extrapolate, 
  runOnJS 
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import { screens } from '../../global/routes';

import {
  Container
} from './styles';

export function Splash(){
  
  const navigation = useNavigation<any>();
 
  const splashAnimation = useSharedValue(0);

  function startApp() {
    navigation.navigate(screens.home);
  }


  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0,  50],
        [1, 0],
        Extrapolate.CLAMP
       ),
       transform: [{
        translateX: interpolate(splashAnimation.value,         
          [0,  50],
          [1, -50],
          Extrapolate.CLAMP)
      }]
    }  
  }) 

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
         [0, 50],
         [0, 1],
         Extrapolate.CLAMP
        ),
        transform: [{
         translateX: interpolate(splashAnimation.value,         
           [0,  50],
           [-50, 0],
           Extrapolate.CLAMP)
       }]
      
    }
  })  

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, 
      { duration: 1250},
      () => {
        'worklet'
        runOnJS(startApp)();        
      }
      
      )
  }, []);

  return (
    <Container>
     {/* <Animated.View style={[brandStyle,{ position: 'absolute'}]}>
       <BrandSvg width={80} height={50}/>
     </Animated.View> */}

     <Animated.View style={[logoStyle,{ position: 'absolute'}]}>
       <LogoSvg width={180} height={50}/>
     </Animated.View>
    </Container>
  );
}
