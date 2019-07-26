import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Image } from 'react-native-lk-widgets'

/**
 *   图片
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-08 19:32
 */
class ImageScreen extends Component {
  static navigationOptions = {
    title: '图片'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>默认大小</Text>
        <Image
          source={require('../../res/images/fj.png')}
          onClick={() => {
            alert()
          }}
        />
        <Text style={styles.textStyle}>圆形（80*80）</Text>
        <Image
          source={require('../../res/images/fj.png')}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={styles.textStyle}>带边框</Text>
        <Image
          source={require('../../res/images/fj.png')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: 'orange'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    marginTop: 10
  }
})

export default ImageScreen
