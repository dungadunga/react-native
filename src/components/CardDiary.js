import React from 'react'
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'

import { IMAGE_ADD, IMAGE_CHECK_EXAMPLE } from '../constants/image'
import { getWidth, getHeight } from '../constants/size'
import { COLOR_TRANS_MAIN, COLOR_CARD_BACK, COLOR_CARD_TEXT, COLOR_WHITE, COLOR_TEXT_GOOGLE, COLOR_TRANS_BLACK } from '../constants/color';

class CardDiaryComponent extends React.Component{
  render() {
    const { isAdd } = this.props;
    return (
      <React.Fragment>
        {
          isAdd ?
            <View style={{
              backgroundColor: COLOR_CARD_BACK,
              borderRadius: 8,
              width: getWidth(88),
              height: getHeight(140),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 8
            }}>
              <TouchableOpacity style={{
                width: 24,
                height: 24,
                borderRadius: 14,
                backgroundColor: COLOR_TRANS_MAIN,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={IMAGE_ADD} style={{
                  width: 16,
                  height: 16
                }}/>
              </TouchableOpacity>
              <Text style={{
                fontSize: 8,
                color: COLOR_CARD_TEXT,
                textAlign: 'center',
                marginTop: 8
              }}>
                Add Photo and write{'\n'}diary.
              </Text>
              
            </View>
            :
            <ImageBackground
              source={IMAGE_CHECK_EXAMPLE}
              style={{
                borderRadius: 8,
                width: getWidth(88),
                height: getHeight(140),
                justifyContent: 'center',
                marginRight: 8,
              }} 
              imageStyle={{
                backgroundColor: COLOR_TRANS_BLACK
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
              <Text style={{
                marginHorizontal: 8,
                marginVertical: 8,
                color: COLOR_WHITE,
                fontSize: 8,
                textAlign: 'left'
              }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed …
              </Text>
            </ImageBackground>
        }
      </React.Fragment>
    )
  }
}

export default CardDiaryComponent