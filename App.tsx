import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Form, Home } from './screens';
import { RootStackParams } from './types/RootStackParams';
import { store } from './Redux/store';

export default function App() {
  const RootStack = createStackNavigator<RootStackParams>();

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="home" component={Home} />
          <RootStack.Screen name="form" component={Form} />
        </RootStack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
