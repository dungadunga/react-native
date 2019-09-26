import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLOR_TRANS_MAIN, COLOR_MAIN } from '../constants/color'
import {
  width,
  getWidth, getHeight
} from '../constants/size'

class TabBarComponent extends React.Component{
  render() {
    const { isFocused, focusedSource, unfocusedSource, label } = this.props
    return (
      <React.Fragment>
        {
          isFocused
          ? <View style={{
              width: (width - 48) / 4,
              height: getHeight(36),
              flexDirection: 'row',
              backgroundColor: COLOR_TRANS_MAIN,
              borderRadius: getHeight(36),
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 24,
              paddingHorizontal: 16
            }}>
              <Image
                source={focusedSource}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 8
                }}
              />
              <Text style={{
                fontSize: 12,
                color: COLOR_MAIN,
                fontWeight: '600'
              }}>{label}</Text>
            </View>
            : 
            <View style={{
              width: (width - 48) / 4,
              marginHorizontal: 24,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image
                source={unfocusedSource}
                style={{
                  width: 24,
                  height: 24
                }} />
            </View>
        }
      </React.Fragment>
    )
  }
}

export default TabBarComponent;