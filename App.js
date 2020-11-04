import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Olá React Native!!!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
