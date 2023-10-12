import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Screen1 from './screens/screen_1'
import Screen2 from './screens/screen_2'
import Screen3 from './screens/screen_3'
import Screen4 from './screens/screen_4'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen1 /> */}
      {/* <Screen2 /> */}
      {/* <Screen3 /> */}
      <Screen4 />
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
