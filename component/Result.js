import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function Result({ navigation, route }) {
  const { score } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.hadding}>Result</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.result}>{score}/100</Text>

      </View>
      <View style={styles.imgcon}>
        <Image
          source={require('./assets/test.png')}
          style={styles.image}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button} >
        <Text style={styles.btext}>SKIP</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    marginTop: 20,
  },
  imgcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btext: {
    fontWeight: '800',
    fontSize: 20
  },
  container: {
    height: '100%',
    justifyContent: 'space-evenly'
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hadding: {
    fontSize: 30,
    fontWeight: '900',

  },
  result: {
    fontSize:30
  }
})
