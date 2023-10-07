import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
export default function Screen2_d() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={require('../assets/book.png')} style={styles.img} />
        {/* <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style={styles.text2}>Cung cấp bởi Tiki Trading</Text> */}
      </View>
      <Text>Login</Text>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E53935',
    width: '100%'
  },
  box: {
    backgroundColor: '#E53935',
    width: 360,
    height: 283
  },
  img: {
    width: 100,
    height: 127,
    left: 13,
    top: 13,
    position: 'absolute'
  }
  // text1: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   fontStyle: 'Roboto',
  //   color: '#000000'
  // },
  // text2: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   fontStyle: 'Roboto',
  //   color: '#000'
  // }
})
