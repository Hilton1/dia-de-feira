import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Background from '../../components/BackgroundImage';

import {
  Container,
  CreateAccount,
  RegisterContainer,
  InputLabel,
  InputForm,
  FormContainer,
  AddressContainer,
  AdressText,
  Inputselect,
  InputBlockCity,
  InputBlockState,
  ButtonSignUp,
  TextButtonSignUp
} from './styles';

export default function ClientRegister() {
  const [selectedValue, setSelectedValue] = useState("AL");

  const navigation = useNavigation();

  function navigateToLogIn() {
    navigation.navigate('LogInScreen');
  }

  return(
    <>
      <Background />
      <Container>
        <CreateAccount>Crie sua conta</CreateAccount>
        <RegisterContainer>
          <FormContainer>
            <InputLabel>Nome completo</InputLabel>
            <InputForm
              placeholder="José da Silva"
              onChangeText={() => {}}
            />

            <InputLabel>Email</InputLabel>
            <InputForm
              placeholder="email@gmail.com"
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <InputLabel>Senha</InputLabel>
            <InputForm
              placeholder="*******"
              autoCorrect={false}
              onChangeText={() => {}}
              secureTextEntry={true}
            />

            <InputLabel>Confirmar Senha</InputLabel>
            <InputForm
              placeholder="*******"
              autoCorrect={false}
              onChangeText={() => {}}
              secureTextEntry={true}
            />

            <InputLabel>CPF</InputLabel>
            <InputForm
              placeholder="000.000.000-00"
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <AdressText>Endereço</AdressText>

            <AddressContainer>
                <InputBlockCity>
                  <InputLabel>Cidade</InputLabel>
                  <InputForm
                    placeholder="Viçosa"
                    autoCorrect={false}
                    onChangeText={() => {}}
                  />
                </InputBlockCity>

                <InputBlockState>
                  <InputLabel>Estado</InputLabel>
                  <Inputselect
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Inputselect.Item label="AL" value="AL" />
                    <Inputselect.Item label="Bla" value="Bla" />
                  </Inputselect>
                </InputBlockState>
            </AddressContainer>

            <InputLabel>Bairro</InputLabel>
            <InputForm
              placeholder="Centro"
              onChangeText={() => {}}
            />

            <InputLabel>Rua</InputLabel>
            <InputForm
              placeholder="Rua exemplo"
              onChangeText={() => {}}
            />

            <InputLabel>Complemento</InputLabel>
            <InputForm
              onChangeText={() => {}}
            />

            <InputLabel>Nº</InputLabel>
            <InputForm
              onChangeText={() => {}}
            />

            <ButtonSignUp onPress={navigateToLogIn}>
              <TextButtonSignUp>Cadastrar</TextButtonSignUp>
            </ButtonSignUp>
          </FormContainer>
        </RegisterContainer>
      </Container>
    </>
  );
}
