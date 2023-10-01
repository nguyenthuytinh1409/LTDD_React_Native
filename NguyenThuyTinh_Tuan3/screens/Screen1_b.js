import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

export default function Screen1_b() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/key.png')} style={styles.img} />
      <Text style={styles.text1}>FORGOT</Text>
      <Text style={styles.text2}>PASSWORD?</Text>
      <Text style={styles.text3}>
        Provide your account’s email for which you want to reset your password
      </Text>

      <Image source={require('../assets/email.png')} style={styles.imgEmail} />
      <TextInput placeholder="Email" style={styles.input}></TextInput>

      <View style={styles.btnNext}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>NEXT</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  img: {
    width: 150,
    height: 170,
    marginHorizontal: 110,
    marginTop: 70
  },
  text1: {
    maxWidth: 350,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center'
  },
  text2: {
    maxWidth: 350,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
    textAlign: 'center'
  },
  text3: {
    maxWidth: 350,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center'
  },

  input: {
    paddingVertical: 15,
    paddingLeft: 55,
    borderColor: '#C4C4C4',
    backgroundColor: '#C4C4C4',
    marginTop: 20,
    width: 305,
    marginBottom: 35
  },
  imgEmail: {
    position: 'absolute',
    width: 40,
    height: 35,
    top: 455,
    left: 50
  },
  btnNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    height: 50,
    backgroundColor: '#E3C000'
  }
})
