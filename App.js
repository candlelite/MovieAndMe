//  App.js in MovieAndMe project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Search from './Components/Search'
import FilmDetail from './Components/FilmDetail'

const SearchStackNavigator = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  );
}

export default App;
