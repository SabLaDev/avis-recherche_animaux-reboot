import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormLostFound from './components/FormLostFound';
import Login from './components/Login';
import Registration from './components/Registration';


export default function App() {
  return (
    <View style={styles.container}>
      <Registration />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
