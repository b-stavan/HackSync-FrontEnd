import React from "react";
import navigationStrings from "../constants/navigationStrings";
import AuthStack from "./AuthStack";
import TabRoutes from "./TabRoutes";
const MainStack = (Stack) => {
  const typeOfUser = "TM";
  // const [displayTLScreen, setDisplayTLScreen] = useState(false);
  // const [displayTMScreen, setDisplayTMScreen] = useState(false);
  // const [displayOrgScreen, setDisplayOrgScreen] = useState(false);

  // if (typeOfUser === "TM") {
  //   setDisplayTMScreen(true);
  // }
  // if (typeOfUser === "TL") {
  //   setDisplayTLScreen(true);
  // }
  // if (typeOfUser === "Org") {
  //   setDisplayOrgScreen(true);
  // }

  return (
    <>
      <Stack.Screen name={navigationStrings.AUTH_STACK} component={AuthStack} />
      {/* <Stack.Screen
        name={navigationStrings.LOGIN_SCREEN}
        component={LoginScreen}
      /> */}
      {true && (
        <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
      )}
    </>
  );
};

export default MainStack;
