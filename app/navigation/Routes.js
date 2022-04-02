import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
import IntroScreen from '../modules/IntroScreen/IntroScreen';
const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isAppLaunched, setAppLunched] = useState(true);

  return (
    // isAppLaunched != false && (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
    // )
  );
};

export default Routes;