import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Screen_01 from './screens/Screen_01'
import Screen_02 from './screens/Screen_02'
import Screen_03 from './screens/Screen_03'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_01">
        <Stack.Screen
          name="Screen_01"
          component={Screen_01}
          options={{
            headerShown: false // Ẩn header nếu bạn không muốn hiển thị
          }}
        ></Stack.Screen>
        <Stack.Screen name="Screen_02" component={Screen_02}></Stack.Screen>
        <Stack.Screen name="Screen_03" component={Screen_03}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
