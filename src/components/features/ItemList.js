import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import Search from 'features/Search';
import Item from 'features/Item';

import { veggieObjs } from 'data/utils';

export default function ItemList({ navigation }) {
  const [search, setSearch] = useState('');

  const searchFilter = veggieObjs.filter((item) => item.name.includes(search)
    || item.name.toLowerCase().includes(search));

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      showDetails={() => {
        navigation.navigate('Details', { item });
      }}
    />
  );

  return (
    <SafeAreaView style={style.container}>
      <View style={style.listContainer}>

        <FlatList
          data={searchFilter}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : null}
      >
        <Search search={search} setSearch={setSearch} />

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
