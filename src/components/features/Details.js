import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, Button, View,
} from 'react-native';

export default function DetailView({ navigation, route }) {
  const { item } = route.params;
  const objs = Object.entries(item).filter((obj) => obj[0] !== 'name');

  return (
    <SafeAreaView style={style.container}>
      <View style={style.listContainer}>
        { objs.map((obj) => (

          <View style={style.table} key={obj[0]}>
            <Text style={style.rowHead}>
              {obj[0]}
            </Text>
            <Text style={style.rowEntry}>
              {obj[1]}
            </Text>
          </View>
        ))}
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  table: {
    flex: 1,
    margin: 0,
  },
  rowHead: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  rowEntry: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 20,
  },
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
