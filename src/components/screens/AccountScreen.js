import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function UserAccount() {
  return (
    <View style={style.container}>
      <Text style={style.header}>
        Account
      </Text>
      <Text>Settings and Profile and Account Stuff</Text>
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
