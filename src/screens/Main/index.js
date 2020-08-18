import React from 'react';

import Header from '../../components/Header';
import Account from '../../components/Account';
import Background from '../../components/BackgroundImage';


import {
  Container
} from './styles';


export default function Main () {
  return (
    <>
      <Background />
      <Container>
        <Header />
        <Account />
      </Container>
    </>
  );
};
