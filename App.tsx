import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './types/RootStackParams';
import { Home, Form } from './screens';

export default function App() {
  const RootStack = createStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="home" component={Home} />
        <RootStack.Screen name="form" component={Form} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
