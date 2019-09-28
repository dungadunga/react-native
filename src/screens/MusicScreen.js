import React from 'react'
import { SafeAreaView, View } from 'react-native'

import TitleComponent from '../components/Titie'
import ButtonComponent from '../components/Button'

import { COLOR_MAIN_SHADOW, COLOR_MAIN, COLOR_WHITE } from '../constants/color'
import { width } from '../constants/size'

class MusicScreen extends React.Component{
  constructor(props) {
    super(props)
    this.onClickLogout = this.onClickLogout.bind(this)
  }

  onClickLogout = () => {
  }

  render() {
    return (
      <SafeAreaView style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <View style={{
          width: '100%',
          alignItems: 'center'
        }}>
          <TitleComponent title="Cradle" isSearch={false} />
        </View>
        <View>
          <ButtonComponent
            width={width - 48}
            height={48}
            margin={12}
            color={COLOR_MAIN}
            radius={26}
            shadow={COLOR_MAIN_SHADOW}
            textcolor={COLOR_WHITE}
            text="Play Music"
            callback={this.onClickLogout}
          />
          <ButtonComponent
            width={width - 48}
            height={48}
            margin={12}
            color={COLOR_MAIN}
            radius={26}
            shadow={COLOR_MAIN_SHADOW}
            textcolor={COLOR_WHITE}
            text="Wave It"
            callback={this.onClickLogout}
          />
        </View>
        
      </SafeAreaView>
    )
  }
}

export default MusicScreen;