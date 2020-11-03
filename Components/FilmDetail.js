// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmDetail extends React.Component {

  render() {
    console.log(this.props);
    console.log(this.props.route.params.idFilm);
    const { idFilm, otherParam } = this.props.route.params

    return (
      <View style={styles.main_container}>
        <Text>Détail du film { this.props.route.params.idFilm } </Text>
        <Text>idFilm: {JSON.stringify(idFilm)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default FilmDetail
