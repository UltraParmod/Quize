import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import SplaceScreen from './src/screen/SplaceScreen';
import ProductScreen from './src/screen/ProductScreen';
import Quize from './src/screen/Quize';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplaceScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Quize" component={Quize} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SplaceScreen" component={SplaceScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
