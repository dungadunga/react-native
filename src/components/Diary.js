import React from 'react'
import { ImageBackground, View, Text } from 'react-native'

import { COLOR_WHITE, COLOR_TEXT_GOOGLE } from '../constants/color'
import { getWidth, getHeight, width } from '../constants/size'

class DiaryComponent extends React.Component{
  render() {
    const { source } = this.props;
    return (
      <ImageBackground
        source={source }
        style={{
          width: (width - 8) / 4,
          height: (width - 8) / 4,
          marginHorizontal: .5,
          marginVertical: .5
        }}
      >
        <View style={{
          width: getWidth(30),
          height: getHeight(16),
          borderRadius: getHeight(8),
          backgroundColor: COLOR_WHITE,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 8,
          marginVertical: 8
        }}>
          <Text style={{
          color: COLOR_TEXT_GOOGLE,
          fontSize: 8,
          }}>09.12</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default DiaryComponent