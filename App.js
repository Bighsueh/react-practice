import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';



export default function App() {
    console.log("console_log");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    </View>
  );
}


// 樣式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  probarStyle: {
    width: 162,
    height: 8,
    backgroundColor: "#E0E0E0"
  },
});
