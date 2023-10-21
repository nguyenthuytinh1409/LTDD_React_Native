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
import { data } from '../screens/data'
const Screen_02 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>The world’s Best Bike</Text>
      </View>
      <View style={styles.button}>
        <Pressable style={styles.button1}>
          <Text style={styles.text2}>All</Text>
        </Pressable>
        <Pressable style={styles.button2}>
          <Text style={styles.text2}>RoadBike</Text>
        </Pressable>
        <Pressable style={styles.button3}>
          <Text style={styles.text2}>Mountain</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.viewItem}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text3}>{item.name}</Text>
                <Text style={styles.text4}>{item.price}</Text>
                <Ionicons
                  style={styles.icon}
                  name="heart-outline"
                  size={24}
                  color="black"
                />
              </View>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  viewItem: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    marginTop: 10
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain'
  },
  item: {
    width: '45%',
    height: 200,
    backgroundColor: '#00000040',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text3: {
    fontSize: 16,
    font: 'Ubuntu',
    color: '#000',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 0
  },
  text4: {
    fontSize: 16,
    font: 'Ubuntu',
    color: '#E94141',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 0
  },
  icon: {
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  header: {
    width: '100%',
    height: '5%',
    backgroundColor: '#fff',
    marginTop: 10
  },
  text1: {
    fontSize: 26,
    font: 'Ubuntu',
    width: '100%',
    color: '#E94141',
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  button: {
    width: '100%',
    height: '5%',
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button1: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
    border: '1px solid #E94141',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2: {
    width: '30%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    border: '1px solid #E94141',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button3: {
    width: '30%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    border: '1px solid #E94141',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text2: {
    fontSize: 16,
    font: 'Ubuntu',
    color: '#000',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 0
  }
})
export default Screen_02
