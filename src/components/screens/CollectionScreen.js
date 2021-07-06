import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function UserCollection() {
  return (
    <View style={style.container}>
      <Text style={style.header}>
        Collections
      </Text>
      <Text>My Collection of Plants</Text>
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
