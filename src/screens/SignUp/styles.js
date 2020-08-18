import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  z-index: 2;
  background-color: transparent;
  align-items: center;
`;

export const CreateAccount = styled.Text`
  color: #000;
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  margin-top: 15%;
  margin-bottom: 15px;
`;

export const RegisterContainer = styled.View`
  width: 80%;
  height: 70%;
  background-color: #FCF7F7;
  box-shadow: 100px 50px 50px black;;
  border-radius: 10px;
`;

export const TextRegister = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  margin: 40px 0;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 30px auto;
`;

export const ButtonClient = styled(RectButton)`
  margin-right: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSupermarket = styled(RectButton)`
`;

export const ImageButton = styled.Image`
  margin: auto;
`;

export const TextButton = styled.Text`
  font-family: 'Montserrat-Regular';
  margin-top: 5px;
  text-align: center;
`;

