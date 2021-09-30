import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Header = styled.Text`
  width: 100%;
  height: 113px;

  font-family: ${({ theme }) => theme.fonts.primary_400}; 
`;