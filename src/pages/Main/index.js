import React from 'react';

import background from '~/assets/background.png';

import Header from '~/components/Header';
import Account from '~/components/Account';

import { Container, BackgroundImage } from './styles';


export default function Main () {
  return (
    <>
      <BackgroundImage source={background} />
      <Container>
        <Header />
        <Account />
      </Container>
    </>
  );
};
