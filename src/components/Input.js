import React from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import {
  COLOR_BLACK,
  COLOR_INPUT_BORDER,
  COLOR_INPUT_PLACEHOLDER,
  COLOR_MAIN,
  COLOR_INPUT_BUTTON
} from '../constants/color'
import { getWidth, getHeight } from '../constants/size'

class InputComponent extends React.Component{
  constructor(props) {
    super(props)
  }

  state = {
    text: ''
  }

  render() {
    const { label, placeholder, type, callback, button } = this.props
    const { text } = this.state;
    console.log(`${label}: ${button}`)
    return (
      <React.Fragment>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 24
        }}>
          <Text style={{
            fontSize: 16,
            lineHeight: 24,
            color: COLOR_BLACK,
            fontWeight: '600'
          }}>
            {label}
          </Text>
          <View/>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 8
        }}>
          <TextInput style={{
            width: '100%',
            padding: 8,
            borderBottomWidth: 2,
            borderBottomColor: COLOR_INPUT_BORDER,
            fontSize: 14
          }}
            placeholder={placeholder}
            placeholderTextColor={COLOR_INPUT_PLACEHOLDER}
            autoCompleteType={type}
            onChangeText={(text) => {
              callback(text)
              this.setState({
                text: text
              })
              console.log(this.state.text.length)
            }}
            secureTextEntry={type === 'password'}
          />
          {
            button !== undefined
              ?
              (label === 'Phone' && text.length === 11) || (label === 'Phone Quotation' && text.length === 6)
                ?
                <TouchableOpacity style={{
                  position: 'absolute',
                  right: 8,
                  width: getWidth(64),
                  height: getHeight(28),
                  backgroundColor: COLOR_INPUT_BUTTON,
                  borderRadius: 14,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: COLOR_MAIN,

                  }}>
                    {button}
                  </Text>
                </TouchableOpacity>
                : null
              : null
          }
        </View>
      </React.Fragment>
    )    
  }
}

export default InputComponent;