import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const AppInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.input_box}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default AppInput;
const styles = StyleSheet.create({
  input_box:{
    width: '100%',
    backgroundColor: '#f5c3c3',
    height: 52,
    borderRadius: 16,
    paddingHorizontal: 12
  },
  input:{
    width: '100%',
    height: '100%'
  }
})
