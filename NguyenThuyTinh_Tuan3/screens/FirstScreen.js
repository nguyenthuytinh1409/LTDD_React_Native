import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse}></View>
      <View>
        <Text style={styles.text1}>GROW</Text>
        <Text style={styles.text3}>YOUR BUSINESS</Text>
        <Text style={styles.text2}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.btn}>
          <View style={styles.btnSignUp}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>LOGIN</Text>
          </View>
          <View style={styles.btnLogin}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SIGN UP</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ellipse: {
    width: 150,
    height: 150,
    backgroundColor: 'transparent',
    borderRadius: 100,
    marginTop: 30,
    borderStyle: 'solid',
    borderWidth: 15,
    borderColor: '#000000'
  },
  text1: {
    maxWidth: 350,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center'
  },
  text3: {
    maxWidth: 350,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },
  text2: {
    maxWidth: 350,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 40
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 360,
    marginTop: 40
    // backgroundColor: 'white',
  },

  btnLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    backgroundColor: '#E3C000',
    borderRadius: 5
  },

  btnSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    backgroundColor: '#E3C000',
    borderRadius: 5
  }
})
