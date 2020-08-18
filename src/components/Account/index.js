import React from 'react';
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  CreateButton,
  CreateButtonText,
  TextOu,
  ImageGoogle,
  LogIn,
  HaveAccount,
  LogInButton,
  LogInText } from './styles';

import logo from '../../assets/textOu.png';

import google from '../../assets/google.png';

export default function Account() {
  const navigation = useNavigation();

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToLogInScreen() {
    navigation.navigate('LogInScreen');
  }

  return(
    <Container>
      <CreateButton onPress={navigateToSignUpScreen}>
        <CreateButtonText>Criar uma conta</CreateButtonText>
      </CreateButton>

      <TextOu source={logo} />
      <ImageGoogle source={google} />

      <LogIn>
        <HaveAccount>Já tem uma conta?</HaveAccount>
        <LogInButton onPress={navigateToLogInScreen}>
          <LogInText>  Entrar</LogInText>
        </LogInButton>
      </LogIn>

    </Container>
  );
}
