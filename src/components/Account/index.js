import React from 'react';

import { Container, CreateButton, CreateButtonText, TextOu, ImageGoogle, LogIn, HaveAccount, LogInButton, LogInText } from './styles';

import logo from '~/assets/textOu.png';

import google from '~/assets/google.png';

export default function Account() {
  return(
    <Container>
      <CreateButton onPress={() => {}}>
        <CreateButtonText>Criar uma conta</CreateButtonText>
      </CreateButton>

      <TextOu source={logo} />
      <ImageGoogle source={google} />

      <LogIn>
        <HaveAccount>Já tem uma conta?</HaveAccount>
        <LogInButton onPress={() => {}}>
          <LogInText>  Entrar</LogInText>
        </LogInButton>
      </LogIn>

    </Container>
  );
}
