// Components/Avatar.js

import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

export function displayAvatar(props) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result)
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return(
    <TouchableOpacity style={styles.touchableOpacity} onPress={pickImage}>
      {image && <Image source={{ uri: image }} style={styles.avatar} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2
  }
})
