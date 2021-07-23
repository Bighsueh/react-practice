import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {ProgressBar} from "react-native-paper";

export default function App() {
    console.log("console_log");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/*ProgressBar*/}
      <Text>ProgressBar</Text>
      <ProgressBar progress={0.3} style={styles.probarStyle} color={'#febc5f'}/>

    </SafeAreaView>
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
