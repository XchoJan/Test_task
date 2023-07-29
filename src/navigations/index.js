import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import UnauthorizedNavigations from "../../src/navigations/UnauthorizedNavigations/UnauthorizedNavigations";
import { useSelector } from "react-redux";
import AuthorizedNavigations from "../navigations/AuthorizedNavigations/AuthorizedNavigations";
import NetInfo from "@react-native-community/netinfo";
import IsNotInetNavigation from "../navigations/IsNotInetNavigation/IsNotInetNavigation";

const RootNavigations = () => {
  const tokenFromReducer = useSelector((store) => store.user_token.user_token);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(isConnected, 'isConnected');
  return (
    <NavigationContainer>
      {isConnected ? (
        tokenFromReducer ? <AuthorizedNavigations /> : <UnauthorizedNavigations />
      ) : (
        <IsNotInetNavigation />
      )}
    </NavigationContainer>
  );
};

export default RootNavigations;
