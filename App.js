import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Routes from "./app/navigation/Routes";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes/>
    </SafeAreaView>
  );
};

export default App;
