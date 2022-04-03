import React from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";

const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
    </>
  );
};

export default MainStack;
