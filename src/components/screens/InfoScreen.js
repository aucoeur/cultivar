import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={style.container}>
      <Text style={style.header}>
        General Plant Data
      </Text>
      <Text>Search for Plant Data to Add to User Collection</Text>
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
    fontSize: 42,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
});
