import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  margin-top: 15px;
`;

export const CreateButton = styled(RectButton)`
  background-color: #F9C300;
  border-radius: 4px;
  height: 39px;
  width: 215px;
  justify-content: center;
  align-items: center;
`;

export const CreateButtonText = styled.Text`
  color: #000;
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
`;

export const TextOu = styled.Image`
  margin: 35px 0 20px 0;
`;

export const ImageGoogle = styled.Image``;

export const LogIn = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HaveAccount = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
`;

export const LogInButton = styled(RectButton)``;

export const LogInText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #AF3D61;
  padding: 5px;
  font-size: 14px;
`;
