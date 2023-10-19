import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Screen1 from './screens/page_1'
import Screen2 from './screens/page_2'

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1 />
      {/* <Screen2 /> */}
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
