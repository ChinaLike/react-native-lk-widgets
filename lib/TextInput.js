import React from 'react'
import {
  StyleSheet,
  View,
  TextInput as TextInputReact,
  Image
} from 'react-native'
import Touchable from './Touchable'

/**
 *   输入框
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-26 11:08
 */
class TextInput extends React.PureComponent {
  static defaultProps = {
    showClearButton: false,
    clearButtonImage: require('../res/images/icon_input_clear.png'),
    editable: true
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.defaultValue
    }
  }

  render() {
    const {
      showClearButton,
      style,
      clearButtonImage,
      onClear,
      clearStyle,
      editable,
      onChangeText,
      value,
      containerStyle
    } = this.props
    const { text } = this.state
    let isShowClearBtn = false
    let inputValue = value ? value : text
    if (showClearButton && inputValue && inputValue.length > 0 && editable) {
      isShowClearBtn = true
    }
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInputReact
          {...this.props}
          style={[styles.inputStyle, style]}
          value={value ? value : text}
          onChangeText={text => {
            this.setState({
              text
            })
            if (onChangeText) {
              onChangeText(text)
            }
          }}
        />
        {isShowClearBtn && (
          <Touchable
            onPress={() => {
              if (onClear && value) {
                onClear()
              } else {
                this.setState({
                  text: ''
                })
              }
            }}
          >
            <Image
              source={clearButtonImage}
              style={[styles.clearBtn, clearStyle]}
            />
          </Touchable>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0
  },
  clearBtn: {
    width: 20,
    height: 20
  }
})

export default TextInput
