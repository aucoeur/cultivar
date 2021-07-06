import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.header}>
        cultivar
      </Text>
      <Text>Please select a tab below</Text>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
});
