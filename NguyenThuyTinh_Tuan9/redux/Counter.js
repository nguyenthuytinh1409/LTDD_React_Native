import {View,Text, Pressable} from 'react-native'
import React from 'react'
import connect from 'react-redux'
const Counter = ({count}) => {
    return(
        <View>
      <Text style={{fontSize:25}}>Number:{count}</Text>
      <Pressable style={{height:100,width:100, justifyContent:'center',alignItems:'center',backgroundColor:'red'}}
      onPress={()=>{
        
      }}></Pressable>
      {/* <Pressable style={{height:100,width:100, justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}
      onPress={()=>{
        
      }}></Pressable> */}
    </View>
    )
}
var map = (state)=>({
    count: state.count
})
export default connect(map, null)(Counter);