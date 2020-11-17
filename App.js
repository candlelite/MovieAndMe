//  App.js in MovieAndMe project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

        <MoviesTabNavigator.Navigator>
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
