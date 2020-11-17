//  App.js in MovieAndMe project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Search from './Components/Search'
import Favorites from './Components/Favorites'
import FilmDetail from './Components/FilmDetail'

const SearchStackNavigator = createStackNavigator();
const MoviesTabNavigator = createBottomTabNavigator();

function SearchStackScreen() {
  return (
    <SearchStackNavigator.Navigator initialRouteName="Search">
      <SearchStackNavigator.Screen
        name="Search"
        component={Search}
        options={{ title: 'Rechercher' }}
      />
      <SearchStackNavigator.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: 'Détail du film' }}
      />
    </SearchStackNavigator.Navigator>
  );
}

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>

        <MoviesTabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused
                ? 'ios-search'
                : 'ios-search';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-heart' : 'ios-heart';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
          <MoviesTabNavigator.Screen
            name="Search"
            component={SearchStackScreen}
            options={{ title: 'Rechercher' }}
          />
          <MoviesTabNavigator.Screen
            name="Favorites"
            component={Favorites}
            options={{ title: 'Favoris' }}
          />
        </MoviesTabNavigator.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

export default App;
