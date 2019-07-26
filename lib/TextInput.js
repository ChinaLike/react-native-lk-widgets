import React from 'react'
import {
  StyleSheet,
  View,
  TextInput as TextInputReact,
  Image
} from 'react-native'

/**
 *   输入框
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-26 11:08
 */
class TextInput extends React.PureComponent {
  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return <TextInputReact />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TextInput
