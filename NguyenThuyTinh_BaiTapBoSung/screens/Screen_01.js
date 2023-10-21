import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image
} from 'react-native'
import React from 'react'
import { useState } from 'react'
const Screen_01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.img} source={require('../assets/xeDap.png')} />
      </View>
      <Text style={styles.text2}>
        POWER BIKE <br></br> SHOP
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.text3}>Get Started</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#fff',
    marginTop: 30
  },
  text1: {
    fontSize: 26,
    font: 'VT323',
    width: '100%',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },
  body: {
    width: '100%',
    height: '50%',
    backgroundColor: '#E94141',
    marginTop: 20,
    borderRadius: 40
  },
  img: {
    width: '80%',
    height: '80%',
    marginTop: 30,
    marginLeft: 30
  },
  text2: {
    fontSize: 26,
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  text3: {
    fontSize: 26,
    width: '100%',
    textAlign: 'center'
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#E94141',
    borderRadius: 30,
    marginTop: 40,
    marginLeft: 20
  }
})
export default Screen_01
