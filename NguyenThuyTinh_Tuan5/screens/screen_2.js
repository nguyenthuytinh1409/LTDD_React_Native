import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../assets/black.png')} />
        <Text style={styles.text}>
          Điện Thoại Vsmart Joy 3 <br />
          Hàng chính hãng
        </Text>
      </View>
      <View style={styles.color}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>
        <TouchableOpacity>
          <View style={styles.pastel}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.red}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.black}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.blue}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.xong}>
            <Text style={styles.text3}>XONG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  xong: {
    width: 340,
    height: 40,
    backgroundColor: 'blue',
    marginTop: 20,
    left: 30,
    borderRadius: 10,
    border: '1px solid #CA1536'
  },
  text3: {
    fontSize: 20,
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
    left: 140
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    width: 400,
    height: 150,
    alignItems: 'center'
  },
  image: {
    width: 115,
    height: 135,
    marginTop: 0,
    left: 10,
    position: 'absolute'
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    left: 30
  },
  color: {
    width: 400,
    height: 510,
    backgroundColor: '#C4C4C4'
  },
  text2: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    left: 30
  },
  pastel: {
    width: 80,
    height: 80,
    backgroundColor: '#C5F1FB',
    marginTop: 20,
    left: 150
  },
  red: {
    width: 80,
    height: 80,
    backgroundColor: '#F30D0D',
    marginTop: 20,
    left: 150
  },
  black: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    marginTop: 20,
    left: 150
  },
  blue: {
    width: 80,
    height: 80,
    backgroundColor: '#234896',
    marginTop: 20,
    left: 150
  }
})
