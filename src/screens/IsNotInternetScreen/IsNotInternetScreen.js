import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppWrapper from "../../components/app-wrapper";

const IsNotInternetScreen = () => {
  return (
    <AppWrapper screenTitle={"Нет подключения к интернету"}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/images/1515.jpg')}/>
      </View>
    </AppWrapper>
  );
};

export default IsNotInternetScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: 260,
    height: 300
  }
});
