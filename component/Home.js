import React from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Top from './Comp/Top'
// import img from './assets/test.png'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.hcon}>
                <Text style={styles.hadding}>QUIZ APP</Text>
            </View>
            <View style={styles.imgcon}>
                <Image
                    source={require('./assets/test.png')}
                    style={styles.image}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}
            style={styles.button} >
                <Text  style={styles.btext}>START</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(100,200,300)',
        marginTop: 0,
        flexDirection:'column',
        justifyContent: 'space-evenly',
        height:'100%',
    },
    hcon:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    hadding: {
        fontSize: 30,
        fontWeight: '900',

    },
    image: {
        height: 300,
        width: 300,
        marginTop :20,
    },
    imgcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
button: {
    backgroundColor: 'red',
    margin:10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    },
    btext: {
    fontWeight:'800',
    fontSize:20
}
})

