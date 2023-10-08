import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
export default function Screen2_b() {
  const show = () => {
    alert('Cảm ơn bạn đã đánh giá')
  }
  const [share, setShare] = React.useState('')
  const [share1, setShare1] = React.useState('')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/usb.png')} style={styles.img} />
        <Text style={styles.text1}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.rate}>
        <Text style={styles.text2}>Cực kỳ hài lòng</Text>
      </View>
      <View style={styles.star}>
        <Image
          source={require('../assets/SaoVang.png')}
          style={styles.imgStar1}
        />
        <Image
          source={require('../assets/SaoVang.png')}
          style={styles.imgStar2}
        />
        <Image
          source={require('../assets/SaoVang.png')}
          style={styles.imgStar3}
        />
        <Image
          source={require('../assets/SaoVang.png')}
          style={styles.imgStar4}
        />
        <Image
          source={require('../assets/SaoVang.png')}
          style={styles.imgStar5}
        />
      </View>
      <View style={styles.addimg}>
        <Image
          source={require('../assets/camera.png')}
          style={styles.imgCamera}
        />
        <Text style={styles.text3}>Thêm hình ảnh</Text>
      </View>
      <View style={styles.share}>
        <TextInput
          placeholder="Chia sẻ những điều mà bạn thích về sản phẩm"
          onChangeText={setShare}
          style={styles.text4}
        ></TextInput>

        <Text style={styles.text5}>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <View style={styles.btnShare}>
        <Button
          title="Send"
          //onPress={show}
          onPress={() => {
            setShare1(share)
          }}
        />
      </View>
      <Text style={styles.text3}>SHARE: {share1}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: 400
  },
  header: {
    width: 400,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginTop: 5
  },
  rate: {
    width: 400,
    height: 100,
    backgroundColor: '#FFFFFF'
  },
  star: {
    width: 400,
    height: 100,
    backgroundColor: '#FFFFFF'
  },
  addimg: {
    width: 300,
    height: 50,
    backgroundColor: '#FFFFFF',
    border: '1px solid #1511EB',
    borderRadius: 5
  },
  share: {
    width: 300,
    height: 210,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    border: '1px solid #C4C4C4',
    borderRadius: 5
  },
  btnShare: {
    width: 300,
    height: 20,
    marginTop: 15,
    backgroundColor: '#1511EB',
    borderRadius: 5
  },
  text1: {
    fontSize: 20,
    width: 300,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#000',
    left: 100,
    marginTop: 20
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    color: '#000',
    marginTop: 40,
    textAlign: 'center'
  },
  text3: {
    fontSize: 20,
    color: '#000',
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'Roboto'
  },
  text4: {
    width: 290,
    height: 210,
    fontSize: 14,
    color: '#C4C4C4',
    fontStyle: 'Roboto'
  },
  text5: {
    fontSize: 12,
    color: '#000',
    marginTop: 130,
    fontStyle: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  img: {
    width: 70,
    height: 70,
    left: 17,
    position: 'absolute'
  },
  imgStar1: {
    width: 40,
    height: 40,
    marginTop: 10,
    left: 59,
    position: 'absolute'
  },
  imgStar2: {
    width: 40,
    height: 40,
    marginTop: 10,
    left: 112,
    position: 'absolute'
  },
  imgStar3: {
    width: 40,
    height: 40,
    marginTop: 10,
    left: 165,
    position: 'absolute'
  },
  imgStar4: {
    width: 40,
    height: 40,
    marginTop: 10,
    left: 218,
    position: 'absolute'
  },
  imgStar5: {
    width: 40,
    height: 40,
    marginTop: 10,
    left: 271,
    position: 'absolute'
  },
  imgCamera: {
    width: 40,
    height: 40,
    left: 20,
    position: 'absolute'
  }
})
