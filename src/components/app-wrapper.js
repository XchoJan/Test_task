import React from "react";
import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";
import { globalStyles } from "../theme/globalStyles";

const AppWrapper = ({ children, keyboardView, screenTitle, flexedHeader }) => {
  return (
   !keyboardView ?
     <View style={styles.container}>
       <View style={[styles.header, flexedHeader && {flex: 1}]}>
         <Text style={globalStyles.titleH1}>{screenTitle}</Text>
       </View>
      {children}
    </View>
     :
     <ScrollView style={styles.container}>
       <View style={styles.header}>
         <Text style={globalStyles.titleH1}>{screenTitle}</Text>
       </View>
       {children}
     </ScrollView>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#ececec",
    marginBottom: 16
  },
  header:{
    height: 140,
    alignItems: 'center',
    width: '100%'
  }
});
