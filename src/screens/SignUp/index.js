import React from 'react';

import background from '../../assets/background.png';
import buttonClient from '../../assets/ButtonClient.png';
import buttonSupermarket from '../../assets/ButtonSupermarket.png';

import {
  Container,
  BackgroundImage,
  CreateAccount,
  RegisterContainer,
  TextRegister,
  ButtonsContainer,
  ButtonClient,
  ButtonSupermarket,
  ImageButton,
  TextButton
 } from './styles';

export default function Main () {
  return (
    <>
      <BackgroundImage source={background} />
      <Container>
        <CreateAccount>Crie sua conta</CreateAccount>
        <RegisterContainer>
          <TextRegister>Escolha a forma de cadastro</TextRegister>
          <ButtonsContainer>
            <ButtonClient>
              <ImageButton source={buttonClient} />
              <TextButton>Cliente</TextButton>
            </ButtonClient>
            <ButtonSupermarket>
              <ImageButton source={buttonSupermarket} />
              <TextButton>Supermercado</TextButton>
            </ButtonSupermarket>
          </ButtonsContainer>
        </RegisterContainer>
      </Container>
    </>
  );
};
