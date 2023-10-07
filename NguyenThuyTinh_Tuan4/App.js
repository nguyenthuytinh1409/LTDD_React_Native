import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Screen2_a from './screens/Screen2_a'
import Screen2_b from './screens/Screen2_b'
import Screen2_c from './screens/Screen2_c'
import Screen2_d from './screens/Screen2_d'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen2_a /> */}
      {/* <Screen2_b /> */}
      {/* <Screen2_c /> */}
      <Screen2_d />
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
  }
})
