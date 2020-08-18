import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Main';
import SignUpScreen from './screens/SignUp';
import LogInScreen from './screens/LogIn';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
    </Stack.Navigator>
  );
}
