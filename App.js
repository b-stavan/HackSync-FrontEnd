import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Routes from "./app/navigation/Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./app/redux/Store";
import { HomeScreen } from "./app/modules";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={reduxStore.store}>
      <PersistGate persistor={reduxStore.persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <HomeScreen />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
