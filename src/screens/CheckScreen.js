import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native'

import ButtonComponent from '../components/Button'
import {
  COLOR_WHITE,
  COLOR_MAIN,
  COLOR_MAIN_SHADOW,
  COLOR_TRANSPARENT,
} from '../constants/color';
import { IMAGE_CHECK_EXAMPLE, IMAGE_X } from '../constants/image'
import { width } from '../constants/size'

class CheckScreen extends React.Component{
  render() {
    const { onClick } = this.props;
    return (
      <ImageBackground
        source={IMAGE_CHECK_EXAMPLE}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: COLOR_WHITE,
        }}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <TouchableOpacity
            onPress={() => onClick()}
            style={{
              position: 'absolute',
              width: 16,
              height: 16,
              top: 24,
              left: 16,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image source={IMAGE_X} style={{
              width: 16,
              height: 16
            }}/>
          </TouchableOpacity>

          <ButtonComponent 
            width={width - 48}
            height={48}
            margin={12}
            color={COLOR_MAIN}
            radius={26}
            shadow={COLOR_MAIN_SHADOW}
            textcolor={COLOR_WHITE}
            text="Stop Watching"
            callback={onClick} />
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

export default CheckScreen