import React from "react";
import navigationStrings from "../constants/navigationStrings";
import IntroScreen from "../modules/IntroScreen/IntroScreen";
import TabRoutes from "./TabRoutes";

const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name='intro' component={IntroScreen}/>

      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
    </>
  );
};

export default MainStack;
