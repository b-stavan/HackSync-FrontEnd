import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "../constants/navigationStrings";
import { HomeScreen, Notification, EditProfile } from "../modules/index";
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={navigationStrings.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
      />
      <Tab.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfile}
      />
    </Tab.Navigator>
  );
};
export default TabRoutes;
