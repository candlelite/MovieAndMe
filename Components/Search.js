// Components/Search.js

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: []
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _loadFilms() {
      console.log(this.state.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
      if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({ films: data.results })
        })
      }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
          data={this.state.films}
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
