import React from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native'

class ButtonComponent extends React.Component{
  render() {
    const { width, height, margin, color, radius, shadow, textcolor, text, callback } = this.props;
    return (
      <TouchableOpacity
        style={{
          width: width,
          height: height,
          marginVertical: margin,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          borderRadius: radius,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.24,
          shadowRadius: 1.41,
          elevation: 2,
          shadowColor: shadow,
        }}
        onPress={(e) => callback(e)}
      >
        <Text style={{
          color: textcolor,
          fontWeight: '600',
          fontSize: 16
        }}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default ButtonComponent;