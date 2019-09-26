import React from 'react'
import { View, Text } from 'react-native'
import { COLOR_BLACK, COLOR_TEXT_GOOGLE } from '../constants/color';

class InfoComponent extends React.Component{
  render() {
    const { title, data } = this.props;
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 24,
        alignItems: 'flex-end'
      }}>
        <Text style={{
          fontSize: 16,
          lineHeight: 24,
          color: COLOR_BLACK,
          fontWeight: '600'
        }}>
          {title}
        </Text>
        <Text style={{
          fontSize: 14,
          color: COLOR_TEXT_GOOGLE,
        }}>
          {data}
        </Text>
      </View>
    )
  }
}

export default InfoComponent