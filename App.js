//  App.js in MovieAndMe project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search'
import FilmDetail from './Components/FilmDetail'

const SearchStackNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SearchStackNavigator.Navigator>
        <SearchStackNavigator.Screen name="Rechercher" component={Search} />
        <SearchStackNavigator.Screen name="Détail du Film" component={FilmDetail} />
      </SearchStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
