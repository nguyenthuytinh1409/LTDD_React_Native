import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import test from '../NguyenThuyTinh_Tuan9/redux/actions'
import Counter from './redux/Counter';
import store from './redux/store';
var tru = {type:'tru'}

export default function App() {
  var [count, setCount] = useState(0);
  return (
    <Provider store={store}>
     <Counter/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
