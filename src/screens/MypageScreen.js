import React from 'react'
import { SafeAreaView, View } from 'react-native'

import TitleComponent from '../components/Titie'
import InfoComponent from '../components/Info'
import ButtonComponent from '../components/Button'

import { COLOR_MAIN_SHADOW, COLOR_MAIN, COLOR_WHITE } from '../constants/color'
import { width } from '../constants/size'
class MypageScreen extends React.Component{
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
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TitleComponent title="My Page" isSearch={true} />
          <View style={{
            width: width - 32,
            alignItems: 'center',
            marginTop: 32,
            marginHorizontal: 16,
          }}>
            <InfoComponent title='Email' data='gtg7784@naver.com'/>
            <InfoComponent title='Phone' data='01039018488'/>
            <InfoComponent title='Email' data='00000000' />
          </View>
        </View>
        <View style={{
          marginBottom: 16
        }}>
          <ButtonComponent
            width={width - 48}
            height={48}
            margin={12}
            color={COLOR_MAIN}
            radius={26}
            shadow={COLOR_MAIN_SHADOW}
            textcolor={COLOR_WHITE}
            text="Volume Up"
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
            text="Volume Down"
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
            <ButtonComponent
              width={width - 48}
              height={48}
              margin={12}
              color={COLOR_MAIN}
              radius={26}
              shadow={COLOR_MAIN_SHADOW}
              textcolor={COLOR_WHITE}
              text="Logout"
              callback={this.onClickLogout}
            />
        </View>
      </SafeAreaView>
    )
  }
}

export default MypageScreen;