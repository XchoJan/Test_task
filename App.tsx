import React from "react";
import { SafeAreaView } from "react-native";
import UnauthorizedNavigations from "./src/navigations/UnauthorizedNavigations/UnauthorizedNavigations";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigations from "./src/navigations";
import { Provider } from "react-redux";
import { store } from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigations />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
