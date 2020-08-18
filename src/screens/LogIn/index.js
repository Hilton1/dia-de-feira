import React from 'react';

import logo from '../../assets/Logo.png';
import Background from '../../components/BackgroundImage';

import {
  Container,
  LogInContainer,
  LogoContainer,
  Logo,
  FormContainer,
  EmailInput,
  PasswordInput,
  ButtonLogIn,
  TextButtonLogIn,
  ButtonSignUp,
  TextButtonSignUp
} from './styles';

export default function LogIn () {
  return (
    <>
      <Background />
      <Container>
        <LogInContainer>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
          <FormContainer>
            <EmailInput
              placeholder="Email"
              autoCorrect={false}
              onChangeText={() => {}}
            />
            <PasswordInput
              placeholder="Senha"
              autoCorrect={false}
              onChangeText={() => {}}
              secureTextEntry={true}
            />
            <ButtonLogIn>
              <TextButtonLogIn>Entrar</TextButtonLogIn>
            </ButtonLogIn>

            <ButtonSignUp>
              <TextButtonSignUp>Criar uma nova conta</TextButtonSignUp>
            </ButtonSignUp>

          </FormContainer>
        </LogInContainer>
      </Container>
    </>
  );
}
