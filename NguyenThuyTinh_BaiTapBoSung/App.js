import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Screen_01 from './screens/Screen_01'
import Screen_02 from './screens/Screen_02'
import Screen_03 from './screens/Screen_03'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen_01 /> */}
      {/* <Screen_02 /> */}
      <Screen_03 />
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
