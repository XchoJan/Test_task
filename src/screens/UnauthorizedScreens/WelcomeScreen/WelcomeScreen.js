import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../theme/globalStyles";
import AppWrapper from "../../../components/app-wrapper";
import AppButton from "../../../components/app-button";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
      <AppWrapper flexedHeader screenTitle={'Добро пожаловать!'}>
        <View>
          <AppButton onPress={()=>{navigation.navigate('SignInScreen')}} title={'Начать'}/>
        </View>
      </AppWrapper>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    width: '100%'
  }
})
