import React from 'react';
import { View } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';

import { addToCollection, removeFromCollection } from 'reducers/collectionReducer';

export default function DetailHeader(item) {
  const collection = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  return (
    <View style={{ paddingRight: 5 }}>

      <Icon
        name={collection.includes(item) ? 'ios-bookmark' : 'ios-bookmark-outline'}
        size={32}
        color="white"
        onPress={() => (collection.includes(item)
          ? dispatch(removeFromCollection(item))
          : dispatch(addToCollection(item)))}
      />
    </View>
  );
}
