import React, { useState } from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import LoginScreen from "../modules/Login/LoginScreen";
const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN_SCREEN}
        component={LoginScreen}
      />     
      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
    </>
  );
};

export default MainStack;
