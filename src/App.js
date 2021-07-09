import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Ionicons as Icon } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import collectionReducer from 'reducers/collectionReducer';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'screens/HomeScreen';
import InfoScreen from 'screens/InfoScreen';
import CollectionScreen from 'screens/CollectionScreen';
import AccountScreen from 'screens/AccountScreen';

const store = configureStore({
  reducer: {
    collection: collectionReducer
  }
});

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>

      <SafeAreaProvider style={style.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case 'Home':
                    iconName = focused ? 'md-home' : 'md-home-outline';
                    break;
                  case 'Info':
                    iconName = focused ? 'ios-book-sharp' : 'ios-book-outline';
                    break;
                  case 'My Plants':
                    iconName = focused ? 'md-leaf' : 'md-leaf-outline';
                    break;
                  case 'Account':
                    iconName = focused ? 'md-person' : 'md-person-outline';
                    break;
                  default:
                  // iconName = focused ? 'ios-desktop' : 'ios-desktop-outline'
                    break;
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'lightgrey',
              labelStyle: {
                fontSize: 12
              },
              style: {
                backgroundColor: 'darkgreen',
                paddingTop: 10,
              }
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Info" component={InfoScreen} />
            <Tab.Screen name="My Plants" component={CollectionScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>
        </NavigationContainer>

      </SafeAreaProvider>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  tabLabels: {
    fontSize: 20
  }
});

export default registerRootComponent(App);
