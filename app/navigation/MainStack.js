import React from "react";
import navigationStrings from "../constants/navigationStrings";
import AuthStack from "./AuthStack";
import TabRoutes from "./TabRoutes";
const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.AUTH_STACK} component={AuthStack} />
      {true && (
        <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
      )}
    </>
  );
};

export default MainStack;
