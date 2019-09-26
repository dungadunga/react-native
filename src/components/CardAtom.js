import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import {
  COLOR_TEXT,
  COLOR_MAIN_SHADOW,
  COLOR_WHITE,
  COLOR_TRANS_MAIN,
  COLOR_MAIN
} from '../constants/color'
import {
  getWidth, getHeight
} from '../constants/size'

class CardAtomComponent extends React.Component{
  render() {
    const {
      icon,
      buttonIcon,
      buttonContent,
      heading,
      isStatus,
      status,
      buttonIconHeight
    } = this.props;
    return (
      <View style={{
        alignItems: 'center',
        padidng: 16,
        width: getWidth(156),
        height: getHeight(200),
        marginTop: 16,
        shadowOffset: {
          width: 3,
          height: 6,
        },
        shadowOpacity: 0.24,
        shadowRadius: 1.41,
        elevation: 2,
        shadowColor: COLOR_MAIN_SHADOW,
        borderRadius: 16,
        backgroundColor: COLOR_WHITE,
      }}>
        <Text style={{
          color: COLOR_TEXT,
          fontSize: getWidth(14),
          width: '100%',
          fontWeight: '600',
          marginTop: 16,
        }}>{heading}</Text>
        <Text style={{
          width: '100%',
          fontSize: getWidth(10),
          marginTop: 4
        }}>{isStatus ? status : null}</Text>
        <View style={{
          marginTop: 28,
          width: getWidth(48),
          height: getWidth(48),
          borderRadius: getWidth(48)/2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR_TRANS_MAIN
        }}>
          <Image source={icon} style={{
            width: getWidth(32),
            height: getWidth(32)
          }} />
        </View>
        <Text style={{
          fontSize: 10,
          color: COLOR_TEXT,
          marginTop: 8
        }}>1hours ago</Text>
        <TouchableOpacity style={{
          backgroundColor: COLOR_TRANS_MAIN,
          width: getWidth(124),
          height: getHeight(22),
          borderRadius: getHeight(22)/2,
          paddingHorizontal: getWidth(20),
          marginTop: getHeight(24),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image source={buttonIcon} style={{
            width: getWidth(12),
            height: buttonIconHeight,
            marginRight: getWidth(9)
          }}/>
          <Text style={{
            fontSize: getWidth(8),
            color: COLOR_MAIN,
            fontWeight: '600'
          }}>{buttonContent}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CardAtomComponent;