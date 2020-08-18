import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

export const LogInContainer = styled.KeyboardAvoidingView`
  background-color: #FCF7F7;
  height: 85%;
  width: 80%;
  align-items: center;
  border-radius: 10px;
`;

export const LogoContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const FormContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  width: 90%;
`;

export const EmailInput = styled.TextInput`
  background-color: #fff;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
  border: 0.5px solid #7C7C7C;
`;

export const PasswordInput = styled.TextInput`
  background-color: #fff;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
  border: 0.5px solid #7C7C7C;
`;

export const ButtonLogIn = styled(RectButton)`
  background-color: #F9C300;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const TextButtonLogIn = styled.Text`
  color: #000;
  font-family: 'Montserrat-SemiBold';
`;

export const ButtonSignUp = styled(RectButton)`
  margin-top: 10px;
  width: 90%;
  align-items: center;
`;

export const TextButtonSignUp = styled.Text`
  font-family: 'Montserrat-Medium';
`;
