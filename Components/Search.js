// Components/Search.js

import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
            <TextInput style={ styles.textinput } placeholder='Titre du film'/>
            <Button style={{ height: 50 }} title='Rechercher' onPress={() => {}}/>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
              data={films}
              keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
  />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 50
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
export default Search
