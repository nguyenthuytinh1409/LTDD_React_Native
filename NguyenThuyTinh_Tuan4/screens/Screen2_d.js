import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
export default function Screen2_d() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/book.png')} style={styles.img} />
        <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style={styles.text2}>Cung cấp bởi Tiki Trading</Text>
        <Text style={styles.text3}>141.800 đ</Text>
        <Text style={styles.text4}>141.800 đ</Text>
        <Text style={styles.text5}>Mua sau</Text>
        <View style={styles.sale}>
          <Text style={styles.text6}>Mã giảm giá đã lưu</Text>
          <Text style={styles.text7}>Xem tại đây</Text>
        </View>
        <View style={styles.nut}>
          <View style={styles.addimg}>
            <Image
              source={require('../assets/camera.png')}
              style={styles.imgCamera}
            />
            <Text style={styles.text8}>Mã giảm giá</Text>
          </View>
          <View style={styles.btnLogin}>
            <Button title="Áp dụng" color="#0A5EB7" />
          </View>
        </View>
      </View>
      <View style={styles.nhaptaiday}>
        <Text style={styles.text9}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.text10}>Nhập tại đây?</Text>
      </View>
      <View style={styles.tamtinh}>
        <Text style={styles.text11}>Tạm tính</Text>
        <Text style={styles.text12}>141.800 đ</Text>
      </View>
      <View style={styles.HT}>
        <View style={styles.tienhanhdathang}>
          <Text style={styles.text13}>Thành tiền</Text>
          <Text style={styles.text14}>141.800 đ</Text>
        </View>
        <View style={styles.btnDatHang}>
          <Button title="TIẾN HÀNH ĐẶT HÀNG" color="#E53935" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  HT: {
    width: 360,
    height: 120,
    backgroundColor: '#FFFFFF',
    marginTop: 130
  },
  btnDatHang: {
    width: 360,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginTop: 5
  },
  tienhanhdathang: {
    width: 330,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 5
  },
  text13: {
    fontSize: 20,
    width: 200,
    height: 14,
    marginTop: 10,
    left: 0,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#808080'
  },
  text14: {
    fontSize: 23,
    width: 110,
    height: 14,
    marginTop: 10,
    left: 40,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#EE0D0D'
  },
  tamtinh: {
    width: 360,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    border: '1px solid #808080',
    borderRadius: 5
  },
  text11: {
    fontSize: 20,
    width: 200,
    height: 14,
    marginTop: 10,
    left: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#000000'
  },
  text12: {
    fontSize: 20,
    width: 100,
    height: 14,
    marginTop: 10,
    left: 40,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#EE0D0D'
  },
  nhaptaiday: {
    width: 360,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    border: '1px solid #808080',
    borderRadius: 5
  },
  text9: {
    fontSize: 12,
    width: 250,
    height: 14,
    marginTop: 10,
    left: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#000000'
  },
  text10: {
    fontSize: 12,
    width: 100,
    height: 14,
    marginTop: 10,
    left: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#134FEC'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: 400
  },
  header: {
    width: 400,
    height: 270,
    backgroundColor: '#FFFFFF',
    marginTop: 5
  },
  sale: {
    width: 400,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  nut: {
    width: 400,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  img: {
    width: 104,
    height: 127,
    left: 13,
    marginTop: 10,
    position: 'absolute'
  },
  text1: {
    fontSize: 14,
    width: 250,
    height: 14,
    marginTop: 14,
    left: 130,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#000000'
  },
  text2: {
    fontSize: 14,
    width: 250,
    height: 14,
    marginTop: 14,
    left: 130,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#000000'
  },
  text3: {
    fontSize: 20,
    width: 250,
    height: 21,
    marginTop: 14,
    left: 130,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#EE0D0D'
  },
  text4: {
    fontSize: 14,
    width: 70,
    height: 14,
    marginTop: 14,
    left: 130,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#808080',
    rotation: 90
  },
  text5: {
    fontSize: 14,
    width: 70,
    height: 14,
    marginTop: 14,
    left: 310,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#134FEC'
  },
  text6: {
    fontSize: 14,
    width: 130,
    marginTop: 8,
    left: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#011627'
  },
  text7: {
    fontSize: 14,
    width: 130,
    marginTop: 8,
    left: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    textAlign: 'center',
    color: '#134FEC'
  },
  text8: {
    fontSize: 20,
    width: 130,
    marginTop: 5,
    left: 50,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#011627'
  },
  addimg: {
    width: 200,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    left: 30,
    border: '1px solid #808080',
    borderRadius: 5
  },
  imgCamera: {
    width: 30,
    height: 30,
    left: 10,
    top: 5,
    position: 'absolute'
  },
  btnLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    left: 65,
    backgroundColor: '#0A5EB7',
    marginTop: 5,
    borderRadius: 5,
    fontSize: 20
  }
})
