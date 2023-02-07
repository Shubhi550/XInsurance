import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Users from './src/screens/Users';
import Kyc from './src/screens/Kyc';

export default function App() {
  const Stack = createNativeStackNavigator();

  return <NavigationContainer>
    <Stack.Navigator initialRouteName= "Home">
      {/* Home */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Kyc" component={Kyc} />
    </Stack.Navigator>
  </NavigationContainer>
}
