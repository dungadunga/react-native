import React from 'react'
import {
  View,
  SafeAreaView,
  Text
} from 'react-native'

import {
  COLOR_WHITE,
  COLOR_MODAL_BAR,
  COLOR_MAIN
} from '../constants/color'
import { getWidth, getHeight } from '../constants/size' 

class StatusScreen extends React.Component{
  render() {
    return (
      <SafeAreaView style={{
        width: '100%',
        height: '100%'
      }}>
        <View style={{
          marginTop: 24,
          width: '100%',
          height:  '100%',
          paddingHorizontal: 24,
          paddingTop: 48,
          paddingBottom: 24,
          backgroundColor: COLOR_WHITE,
          borderTopLeftRadius: 72,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{
            position: 'absolute',
            top: 16,
            width: getWidth(28),
            height: getHeight(4),
            borderRadius: 1,
            backgroundColor: COLOR_MODAL_BAR
          }} />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 4
          }}>
            <View/>
            <Text style={{
              fontSize: 20,
              lineHeight: 24,
              color: COLOR_MAIN,
              fontWeight: '700'
            }}>
              How to baby status better?
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default StatusScreen