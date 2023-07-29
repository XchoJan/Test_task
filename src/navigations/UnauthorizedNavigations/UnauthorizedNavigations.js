import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

let Stack = createStackNavigator();
import WelcomeScreen from "../../screens/UnauthorizedScreens/WelcomeScreen/WelcomeScreen";
import SignInScreen from "../../screens/UnauthorizedScreens/SignInScreen/SignInScreen";
export default function UnauthorizedNavigations() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
