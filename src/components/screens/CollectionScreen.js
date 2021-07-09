import React from 'react';

import {
  View, StyleSheet, Text
} from 'react-native';

import { useSelector } from 'react-redux';

export default function UserCollection() {
  const collection = useSelector((state) => state.collection);

  return (
    <View style={style.container}>
      <Text style={style.header}>
        Collections
      </Text>

      <View style={style.listContainer}>
        {collection.length === 0 ? <Text>My Collection of Plants</Text>
          : (collection.map((item) => <Text style={style.listContainer} key={item}>{item}</Text>)
          )}
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    fontSize: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
