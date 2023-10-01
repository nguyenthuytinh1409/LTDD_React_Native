import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'

export default function Screen1_e() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>REGISTER</Text>
      <TextInput placeholder="Name" style={styles.input}></TextInput>
      <TextInput placeholder="Phone" style={styles.input}></TextInput>
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Password" style={styles.input}></TextInput>
      <TextInput placeholder="Birthday" style={styles.input}></TextInput>

      <View style={styles.btnRes}>
        <Text style={styles.textRes}>REGISTER</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.text2}>When you agree to term an conditions</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  sex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  input: {
    color: '#000',
    fontWeight: 'bold',
    paddingVertical: 14,
    paddingLeft: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    marginTop: 18,
    width: 330
  },
  btnRes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    height: 50,
    backgroundColor: '#E53935',
    marginTop: 50,
    borderRadius: 2
  },

  text1: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 40,
    margin: 40,
    marginBottom: 10,
    textAlign: 'center'
  },

  text2: {
    maxWidth: 350,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center'
  },

  textRes: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21
  }
})
