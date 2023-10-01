import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'

export default function Screen1_c() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>CODE</Text>
      <Text style={styles.text2}>VERIFICATION</Text>
      <Text style={styles.text3}>
        Enter ontime password sent on ++849092605798
      </Text>

      <View style={styles.inputs}>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.btnNext}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>VERIFY CODE</Text>
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
  text1: {
    maxWidth: 350,
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 100,
    textAlign: 'center'
  },
  text2: {
    maxWidth: 350,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 40,
    textAlign: 'center'
  },
  text3: {
    maxWidth: 350,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center'
  },

  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  input: {
    paddingVertical: 14,
    paddingLeft: 50,
    borderColor: '#000',
    backgroundColor: 'white',
    borderWidth: 2,
    marginTop: 20,
    width: 50,
    marginBottom: 43
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
