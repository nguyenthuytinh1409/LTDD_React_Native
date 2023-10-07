import * as React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function GeneratorPass() {
  const [pass, setPass] = React.useState()
  const [pass1, setPass1] = React.useState()

  const numbers = '0123456789'
  const symbols = '!@#$%^&*_-+='
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const incNumbers = document.getElementById('number')
  const incSymbols = document.getElementById('symbol')
  const incLower = document.getElementById('lower')
  const incUpper = document.getElementById('upcase')

  const genPass = () => {
    let lengthPW = Number(pass)
    if (isNaN(lengthPW)) {
      alert('Nhập độ dài cho password')
      return
    }
    if (lengthPW < 4 || lengthPW > 10) {
      alert('Password từ 4-10 ký tự')
      return
    }

    let characters = ''
    incLower.checked ? (characters += lowers) : ''
    incUpper.checked ? (characters += uppers) : ''
    incNumbers.checked ? (characters += numbers) : ''
    incSymbols.checked ? (characters += symbols) : ''
    let passwordTxt = generatePassword(lengthPW, characters)

    setPass1(passwordTxt)
  }

  const generatePassword = (length, characters) => {
    let password = ''
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }
    return password
  }
  //Giao dien
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          GENERATOR <br /> PASSWORD
        </Text>
        <View style={styles.outputPass}>
          <Text style={styles.textOP}>{pass1}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.check_box}>Password length</Text>
          <TextInput
            style={styles.lenghth_IP}
            onChangeText={setPass}
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.check_box}>Include lowercase</Text>
          <input style={styles.checkbox} type="checkbox" id="lower" />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.check_box}>Include upcase letters</Text>
          <input style={styles.checkbox} type="checkbox" id="upcase" />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.check_box}>Include number</Text>
          <input style={styles.checkbox} type="checkbox" id="number" checked />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.check_box}>Include special symbol</Text>
          <input style={styles.checkbox} type="checkbox" id="symbol" />
        </View>
        <View style={styles.btnGen}>
          <Button
            id="generate"
            title="Generate password"
            color="transparent"
            onPress={genPass}
          ></Button>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: '#3B3B98',
    width: '100%'
  },
  box: {
    backgroundColor: '#23235B',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  outputPass: {
    backgroundColor: '#151537',
    width: '90%',
    height: 50,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 30
  },
  lenghth_IP: {
    backgroundColor: '#fff',
    width: 110,
    height: '90%',
    fontSize: 18,
    fontWeight: 'bold'
  },
  check_box: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  checkbox: {
    width: 40,
    height: 40
  },
  inputBox: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    marginTop: 5
  },
  btnGen: {
    backgroundColor: '#3B3B98',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textOP: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B3B98'
  }
})
