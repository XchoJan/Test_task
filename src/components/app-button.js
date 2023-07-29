import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "aqua",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold'
  }
});
