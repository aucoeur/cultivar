import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

// import ItemList from 'features/ItemList';
// import Details from 'features/Details';
// import DetailHeader from 'layout/DetailHeader';

// const CollectionStack = createStackNavigator();

export default function UserCollection() {
  const collection = useSelector((state) => state.collection);
  // const data = collection.map((name) => veggie[name]);

  return (
    <View style={style.container}>
      <Text style={style.header}>
        Collections
      </Text>

      { collection.length === 0
        ? <Text>My Collection of Plants</Text>
        : (
          <View style={style.listContainer}>
            { collection.map((item) => <Text style={style.text} key={item}>{item}</Text>)}
          </View>
        )}

    </View>

  );
}
//   return (
//     collection.length === 0
//       ? (
//         <View style={style.container}>
//           <Text style={style.header}>
//             Collections
//           </Text>

//           <View style={style.listContainer}>
//             <Text>My Collection of Plants</Text>
//           </View>

//         </View>
//       )

//       : (
//         <CollectionStack.Navigator
//           screenOptions={stackStyle}
//         >
//           <CollectionStack.Screen
//             name="Info"
//             component={ItemList}
//             initialParams={{ data }}

//           />
//           <CollectionStack.Screen
//             name="Details"
//             component={Details}
//             options={({ route }) => ({
//               headerTitle: route.params.item.name,
//               headerRight: () => DetailHeader(route.params.item.name),
//             })}
//           />
//         </CollectionStack.Navigator>
//       )
//   );
// }

// const stackStyle = ({
//   headerStyle: {
//     backgroundColor: 'rgba(73, 130, 85, 1)',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
// });

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'rgba(73, 130, 85, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
  }
});
