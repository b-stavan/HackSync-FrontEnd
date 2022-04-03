import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import navigationStrings from "../constants/navigationStrings";
import {
  HomeScreenTeamLeader,
  LoginScreen,
  OrgRegistration,
  StartScreen,
} from "../modules";

const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationStrings.STARTING_SCREEN}
        component={StartScreen}
      />
      <Stack.Screen
        name={navigationStrings.ORG_REGISTRATION}
        component={OrgRegistration}
      />
      <Stack.Screen
        name={navigationStrings.JOIN_STACK}
        component={HomeScreenTeamLeader}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
