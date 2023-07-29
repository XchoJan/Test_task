import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

let Stack = createStackNavigator();
import HomeScreen from "../../screens/AuthorizedScreens/HomeScreen/HomeScreen";
export default function AuthorizedNavigations() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
