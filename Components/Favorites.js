// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { displayAvatar } from '../Hooks/Avatar'

import { connect } from 'react-redux'
import FilmList from './FilmList'

class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.avatar_container}>
          {displayAvatar()}
        </View>
        <FilmList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favoriteList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)
