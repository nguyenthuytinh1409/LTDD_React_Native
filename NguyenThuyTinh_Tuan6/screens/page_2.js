import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { data } from './data_2'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.muiTen} source={require('../assets/muiTen.png')} />
        <TextInput style={styles.input} placeholder="Dây cáp usb"></TextInput>
        <Image
          style={styles.search}
          source={require('../assets/timKiem.png')}
        />
        <Image
          style={styles.gioHang}
          source={require('../assets/gioHang.png')}
        />
        <Text style={styles.cham}>...</Text>
      </View>
      <ScrollView style={styles.viewItem}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.box}>
                <Image style={styles.img} source={item.img} />
                <Text style={styles.content}>{item.content}</Text>
                <View style={styles.rating}>
                  <Image style={styles.img1} source={item.imgRating} />
                  <Text style={styles.review}>({item.review})</Text>
                </View>
                <View style={styles.boxPrice}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.disCount}>{item.disCount}</Text>
                </View>
              </View>
            )
          }}
        />
      </ScrollView>
      <View style={styles.cuoi}>
        <Icon name="bars" size={24} />
        <Icon name="home" size={24} />
        <Icon name="undo" size={24} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cuoi: {
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '15px'
  },
  cham: {
    width: 50,
    height: 50,
    position: 'absolute',
    fontSize: 30,
    right: 10,
    color: 'white'
  },
  gioHang: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 12,
    right: 80
  },
  container: {},
  header: {
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    paddingVertical: 8
  },
  input: {
    width: 192,
    height: 30,
    backgroundColor: 'white',
    paddingLeft: 40
  },
  search: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 12,
    left: 80
  },
  viewItem: {
    marginHorizontal: 12
  },
  box: {
    marginRight: 40,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  muiTen: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 12,
    left: 30
  },
  img: {
    width: 165,
    height: 90,
    marginBottom: 10
  },
  content: {
    marginBottom: 3,
    maxWidth: 111,
    fontSize: 12,
    fontWeight: 400
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4
  },
  img1: {
    width: 85,
    height: 13
  },
  boxPrice: {
    flexDirection: 'row',
    gap: 16,
    marginRight: 18
  },
  price: {
    fontSize: 12,
    fontWeight: 700
  },
  disCount: {
    fontSize: 12,
    fontWeight: 400,
    color: '#969DAA'
  }
})

export default Screen2
