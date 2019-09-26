import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import InputComponent from '../components/Input'
import ButtonComponent from '../components/Button'

import {
  COLOR_WHITE,
  COLOR_MODAL_BAR,
  COLOR_MAIN,
  COLOR_MAIN_SHADOW,
  COLOR_TRANSPARENT,
  COLOR_LOGIN_TEXT,
} from '../constants/color'
import { width, height, getWidth, getHeight } from '../constants/size'

class EmailLoginScreen extends React.Component{
  constructor(props) {
    super(props)

    this.recevieEmailCallback = this.recevieEmailCallback.bind(this)
    this.receviePasswordCallback = this.receviePasswordCallback.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
  }

  state = {
    email: '',
    password: '',
  }

  recevieEmailCallback = (data) => {
    this.setState({
      email: data
    })
  }
  
  receviePasswordCallback = (data) => {
    this.setState({
      password: data
    })
  }

  onSignIn = () => {
    console.log(this.state)
    const { navigation } = this.props;
    navigation.navigate('Main')
  }
  
  render() {
    const { renderRegister } = this.props
    
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
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
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
                Sign In
              </Text>
            </View>
            <InputComponent
              label="E-mail"
              placeholder="Your E-mail here."
              type="email"
              callback={this.recevieEmailCallback}
            />
            <InputComponent
              label="Password"
              placeholder="Your Password here."
              type="password"
              callback={this.receviePasswordCallback}
            />
            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}>
              <Text style={{
                  fontSize: 12,
                  color: COLOR_LOGIN_TEXT,
                  marginTop: 24
                }}
              >
                Don't have an account?{' '}
              </Text>
              <TouchableHighlight
                onPress={() => renderRegister()}
                underlayColor={COLOR_TRANSPARENT}
              >
                <Text style={{
                  fontSize: 12,
                  color: COLOR_MAIN,
                  marginTop: 24,
                  fontWeight: '600'
                }}>
                  Create Account
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View>
            <ButtonComponent
              width={width - 48}
              height={48}
              margin={24}
              color={COLOR_MAIN}
              radius={24}
              shadow={COLOR_MAIN_SHADOW}
              textcolor={COLOR_WHITE}
              text="Sign In"
              callback={this.onSignIn}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default EmailLoginScreen;