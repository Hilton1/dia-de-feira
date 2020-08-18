import React from 'react';

import Background from '../../components/BackgroundImage';

import buttonClient from '../../assets/ButtonClient.png';
import buttonSupermarket from '../../assets/ButtonSupermarket.png';

import {
  Container,
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
      <Background />
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
