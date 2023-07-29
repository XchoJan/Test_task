import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

let Stack = createStackNavigator();
import IsNotInternetScreen from "../../screens/IsNotInternetScreen/IsNotInternetScreen";
export default function IsNotInetNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="IsNotInternetScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IsNotInternet" component={IsNotInternetScreen} />
    </Stack.Navigator>
  );
}
