import React from 'react';
import {
  ImageBackground, View, StyleSheet, Text
} from 'react-native';

import background from 'assets/bg2x.png';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={style.bg}
      />
      <View style={style.title}>
        <Text style={style.header}>
          cultivar
        </Text>
        <Text>Please select a tab below</Text>
      </View>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(165, 222, 150, 1)',
    paddingTop: 80,
  },
  title: {
    justifyContent: 'flex-end',
    padding: 15,
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
  bg: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'flex-end',
  }
});
