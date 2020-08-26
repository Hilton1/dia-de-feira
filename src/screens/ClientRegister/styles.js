import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';

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

export const RegisterContainer = styled.ScrollView`
  width: 90%;
  height: auto;
  background-color: #FCF7F7;
  box-shadow: 100px 50px 50px black;
  border-radius: 10px;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  align-items: center;
`;

export const InputLabel = styled.Text`
  width: 80%;
  text-align: left;
  font-family: 'Montserrat-Medium';
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const InputForm = styled.TextInput`
  background-color: #fff;
  width: 80%;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
  border: 0.5px solid #7C7C7C;
  justify-content: center;
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AdressText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: 'Montserrat-Regular';
  justify-content: center;
  margin-top: 15px;
`;

export const InputBlockCity = styled.View`
  width: 55%;
`;

export const InputBlockState = styled.View`
  width: 25%;
`;

export const Inputselect = styled(Picker)`
`;

export const ButtonSignUp = styled(RectButton)`
  background-color: #F9C300;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 25px auto;
`;

export const TextButtonSignUp = styled.Text`
  color: #000;
  font-family: 'Montserrat-SemiBold';
`;
