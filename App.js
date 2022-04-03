import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Routes from "./app/navigation/Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./app/redux/Store";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={reduxStore.store}>
      <PersistGate persistor={reduxStore.persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
