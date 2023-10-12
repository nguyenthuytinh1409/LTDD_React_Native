import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
export default function Screen1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={require('../assets/black.png')} />
        <Text style={styles.text1}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.star}>
        <Image style={styles.img2} source={require('../assets/star.png')} />
        <Image style={styles.img2} source={require('../assets/star.png')} />
        <Image style={styles.img2} source={require('../assets/star.png')} />
        <Image style={styles.img2} source={require('../assets/star.png')} />
        <Image style={styles.img2} source={require('../assets/star.png')} />
        <Text style={styles.text2}>Xem 828 đánh giá</Text>
      </View>
      <View style={styles.giaTien}>
        <Text style={styles.text3}>1.790.000 đ</Text>
        <Text style={styles.text4}>1.990.000 đ</Text>
      </View>
      <View style={styles.sale}>
        <Text style={styles.text7}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={styles.img4} source={require('../assets/chamHoi.png')} />
      </View>
      <View style={styles.chonMau}>
        <Text style={styles.text5}>4 MÀU-CHỌN MÀU</Text>
        <Image style={styles.img3} source={require('../assets/vector.png')} />
      </View>

      <View style={styles.buyButton}>
        <TouchableOpacity>
          <Text style={styles.text6}> CHON MUA </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  text7: {
    color: '#FA0000',
    fontSize: 12,
    fontWeight: 'bold',
    left: 10
  },
  text6: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  img4: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginLeft: 20
  },
  chonMau: {
    width: 360,
    height: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid #000000',
    boderRadius: 10
  },
  text5: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    left: 70
  },
  img3: {
    width: 10,
    height: 10,
    marginTop: 5,
    marginLeft: 130
  },
  text4: {
    color: '#00000094',
    fontSize: 15,
    marginTop: 10,
    left: 50,
    textDecorationLine: 'line-through'
  },
  text3: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    left: 15
  },
  text2: {
    fontSize: 17,
    marginLeft: 20,
    marginTop: 15,
    color: '#000000'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: 400,
    padding: 10
  },
  header: {
    width: 400,
    height: 400,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  img: {
    position: 'absolute',
    width: 300,
    height: 360,
    top: 10,
    left: 30
  },
  text1: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 370,
    left: 5,
    width: 360,
    height: 100
  },
  star: {
    width: 400,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    left: 5
  },
  sale: {
    width: 400,
    height: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    left: 10
  },
  giaTien: {
    width: 400,
    height: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    left: 5,
    textAlign: 'center'
  },
  img2: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 10
  },
  buyButton: {
    width: 360,
    height: 40,
    backgroundColor: '#CA1536',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    boderRadius: 10,
    textAlign: 'center',
    borderRadius: 10
  }
})
