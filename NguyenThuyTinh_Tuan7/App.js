import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import API_1 from "./screens/API_1";
import API_2 from "./screens/API_2";
import API_3 from "./screens/API_3";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="API_1"
          component={API_1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="API_2"
          component={API_2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="API_3"
          component={API_3}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
