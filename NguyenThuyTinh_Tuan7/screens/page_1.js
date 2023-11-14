import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'
import React from 'react'
export default function Screen1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img1}
          source={require('../assets/icon.png')}
        ></Image>
      </View>
      <Text style={styles.text1}>MANAGER YOUR</Text>
      <Text style={styles.text1}> TASK</Text>
      <View style={styles.IP}>
        <Image
          style={styles.img2}
          source={require('../assets/icon.png')}
        ></Image>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
        ></TextInput>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text style={styles.text}> GET STARTED </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
    boderRadius: 10,
    textAlign: 'center',
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    fontSize: 16,
    width: 300,
    marginLeft: 60,
    color: 'gray'
  },
  img2: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    marginLeft: 10,
    position: 'absolute'
  },
  IP: {
    marginTop: 30,
    flexDirection: 'row',
    height: 40,
    width: 330,
    borderRadius: 10,
    border: '1px solid gray',
    alignContent: 'center',
    alignItems: 'center'
  },
  text1: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: 300
  },
  img1: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    marginTop: 80,
    marginLeft: 80
  }
})
