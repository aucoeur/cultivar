import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ItemList from 'features/ItemList';
import Details from 'features/Details';

const Stack = createStackNavigator();

export default function InfoScreen() {

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
        options={({ route }) => ({ title: route.params.item.name })}
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
