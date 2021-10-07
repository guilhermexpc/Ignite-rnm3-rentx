import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 126px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin: 16px;

  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Details = styled.View`

`
export const Brand = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`
export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`
export const Rent = styled.View`
  margin-right: 24px;

`
export const Period = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`
export const Price = styled.Text`

`
export const Type = styled.View`

`
export const GasolineSVG = styled.View`

`
export const CarImage = styled.Image`

`