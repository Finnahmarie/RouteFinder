import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TopImageContainer}>
              <Image
              source={require('../../assets/images/CornerGradient.png')} 
              style={styles.TopImage}
              />
      </View>

      <View style={styles.BottomImageContainer}>
              <Image
              source={require('../../assets/images/GradientBottom.png')} 
              style={styles.BottomImage}
              />
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
  container: {
    backgroundColor: '#EAF7C0',
    flex: 1,
  },
  TopImageContainer: {
    //blank
  },

  TopImage: {
    width: 368.94,
    height: 500,
  },

  BottomImageContainer: {
    width: 500,
    height: 500,
    marginTop: 350,
    marginLeft: 80,
    position: 'absolute',
  },

})

export default profile