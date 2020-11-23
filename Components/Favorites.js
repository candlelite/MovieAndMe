// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import FilmList from './FilmList'

class Favorites extends React.Component {

  render() {
    return (
        <FilmList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
        />
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)
