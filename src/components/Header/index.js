import React from 'react';

import { Container, Top, Logo } from './styles';

import logo from '../../assets/Logo.png';

export default function Header() {
  return(
    <Container>
      <Top>
        <Logo source={logo} />
      </Top>


    </Container>
  );
}
