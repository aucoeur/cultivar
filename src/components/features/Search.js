import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Search({ search, setSearch }) {
  return (
    <View style={style.search}>
      <TextInput
        style={style.searchText}
        clearButtonMode="always"
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
}

const style = StyleSheet.create({
  search: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 0%, 95%)',
  },
  searchText: {
    width: '95%',
    height: 40,
    backgroundColor: 'hsl(0, 0%, 90%)',
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 24,
  },
});
