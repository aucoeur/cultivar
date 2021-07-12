import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ItemList from 'features/ItemList';
import Details from 'features/Details';
import DetailHeader from 'layout/DetailHeader';

import { veggieObjs as data } from 'data/utils';

const Stack = createStackNavigator();

export default function ListScreen() {

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
        initialParams={{ data }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          headerTitle: route.params.item.name,
          headerRight: () => DetailHeader(route.params.item.name),
        })}
      />
    </Stack.Navigator>
  );
}

const stackStyle = ({
  headerStyle: {
    backgroundColor: 'rgba(73, 130, 85, 1)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
