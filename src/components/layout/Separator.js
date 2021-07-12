import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Separator() {
  return (
    <View style={style.separator} />
  );
}

const style = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },
});
