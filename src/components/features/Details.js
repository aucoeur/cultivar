import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, Button, View,
} from 'react-native';

export default function DetailView({ navigation, route }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.listContainer}>
        <Text style={style.name}>{item.name}</Text>

        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  name: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: 15,
    justifyContent: 'center',
  },
});
