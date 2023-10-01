import { Button, Image, StyleSheet, Text, View, ViewBase } from 'react-native'
import FirstScreen from './screens/FirstScreen'
import Screen1_a from './screens/Screen1_a'
import Screen1_b from './screens/Screen1_b'
import Screen1_c from './screens/Screen1_c'
import Screen1_d from './screens/Screen1_d'
import Screen1_e from './screens/Screen1_e'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      {/* <Screen1_a /> */}
      {/* <Screen1_b /> */}
      {/* <Screen1_c /> */}
      {/* <Screen1_d /> */}
      <Screen1_e />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  }
})
