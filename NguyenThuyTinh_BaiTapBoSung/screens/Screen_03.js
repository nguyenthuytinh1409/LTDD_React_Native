import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  ScrollView,
  Pressable
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import img from '../assets/1.png'
const Screen_03 = ({ navigation, route }) => {
  const image = route.params?.image || img
  const name = route.params?.name || 'Pinarello'
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.text1}>{name}</Text>
      <View style={styles.price}>
        <Text style={styles.text2}>15% OFF I 350$</Text>
        <Text style={styles.text3}>499$</Text>
      </View>
      <Text style={styles.text4}>Description</Text>
      <Text style={styles.text5}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={styles.button}>
        <Ionicons name="heart-outline" size={40} color="black" />
        <Pressable style={styles.button1}>Add to card</Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  text5: {
    fontSize: 19,
    color: '#00000091',
    marginTop: 20,
    marginLeft: 15
  },
  button: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 30
  },
  button1: {
    width: 200,
    height: 50,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#E94141',
    borderRadius: 30,
    marginLeft: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text4: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginLeft: 15
  },
  price: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10
  },
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    marginLeft: 60
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00000096'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  header: {
    width: '95%',
    height: '50%',
    backgroundColor: '#E941411A',
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    font: 'Voltaire',
    marginLeft: 15
  }
})
export default Screen_03
