import React from 'react';
import { View } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import ItemList from 'features/ItemList';
import Details from 'features/Details';
import { addToCollection, removeFromCollection } from 'reducers/collectionReducer';

const Stack = createStackNavigator();

export default function InfoScreen() {
  const collection = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  // <Text style={style.header}>
  //       General Plant Data
  //     </Text>
  //     <Text>Search for Plant Data to Add to User Collection</Text>

  return (
    <Stack.Navigator
      screenOptions={stackStyle}
    >
      <Stack.Screen
        name="Info"
        component={ItemList}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          headerTitle: route.params.item.name,
          headerRight: () => (
            <View style={{ paddingRight: 5 }}>

              <Icon
                name={collection.includes(route.params.item.name) ? 'ios-bookmark' : 'ios-bookmark-outline'}
                size={32}
                color="white"
                onPress={() => (collection.includes(route.params.item.name)
                  ? dispatch(removeFromCollection(route.params.item.name))
                  : dispatch(addToCollection(route.params.item.name)))}
              />
            </View>
          )
        })}
      />
    </Stack.Navigator>
  );
}

const stackStyle = ({
  headerStyle: {
    backgroundColor: 'darkgreen',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
