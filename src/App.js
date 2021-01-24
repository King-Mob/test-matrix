import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Login} from './screens/Login';
import '@expo/browser-polyfill';

export const App = () => {
  return (
    <View style={styles.container}>
      <Login/>
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
