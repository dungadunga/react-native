import React from 'react'
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import RegisterScreen from './RegisterScreen'
import EmailLoginScreen from './EmailLoginScreen'

import ModalComponent from '../components/Modal'
import ButtonComponent from '../components/Button'

import { IMAGE_LOGIN_LOGO } from '../constants/image'
import {
  COLOR_MAIN,
  COLOR_TEXT_GOOGLE,
  COLOR_FACEBOOK,
  COLOR_WHITE_SHADOW,
  COLOR_WHITE,
  COLOR_TRANSPARENT,
  COLOR_FACEBOOK_SHADOW,
  COLOR_MAIN_SHADOW
} from '../constants/color'
import { width, height } from '../constants/size'

class LoginScreen extends React.Component{
  constructor(props) {
    super(props)

    this.renderRegister = this.renderRegister.bind(this)
    this.renderRegisterModal = this.renderRegisterModal.bind(this)
    this.receiveGoogleCallback = this.receiveGoogleCallback.bind(this)
    this.receiveFacebookCallback = this.receiveFacebookCallback.bind(this)
    this.receiveEmailCallback = this.receiveEmailCallback.bind(this)
  }

  state = {
    isVisibleRegister: false,
    isVisibleLogin: false
  }

  renderRegister = () => <RegisterScreen />
  renderLogin = () => <EmailLoginScreen renderRegister={this.renderRegisterModal} />

  renderRegisterModal = () => {
    this.setState({
      isVisibleRegister: false
    }, () => this.setState({
      isVisibleRegister: true,
    }, () => this.setState({
      isVisibleLogin: false
    })))
  }

  receiveGoogleCallback = (event) => {
    console.log(event)
  }

  receiveFacebookCallback = (event) => {
    console.log(event)
  }

  receiveEmailCallback = (event) => {
    this.setState({
      isVisibleLogin: false
    }, () => this.setState({
      isVisibleLogin: true
    }))
  }
  
  render() {
    const { isVisibleLogin, isVisibleRegister } = this.state;
    return (
      <React.Fragment>
        <SafeAreaView style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          width: '100%',
          height: '100%'
        }}>
          <View style={{
            width: '100%',
            alignItems: 'center'
          }}>
            <Image
              source={IMAGE_LOGIN_LOGO}
              style={{
                width: 120,
                height: 120,
                marginTop: height*0.15
              }}
            />
            <Text style={{
                fontSize: 24,
                color: COLOR_MAIN,
                marginTop: 36
              }}
            >Welcome{' '}
              <Text style={{
                  fontWeight: '700'
                }}
              >
                Dunga
              </Text>
            </Text>
          </View>
          <View style={{
            width: '100%',
            alignItems: 'center'
          }}>
            <ButtonComponent
              width={width - 48}
              height={48}
              margin={12}
              color={COLOR_WHITE}
              radius={26}
              shadow={COLOR_WHITE_SHADOW}
              textcolor={COLOR_TEXT_GOOGLE}
              text="Login with Google"
              callback={this.receiveGoogleCallback}
            />
            <ButtonComponent
              width={width - 48}
              height={48}
              margin={12}
              color={COLOR_FACEBOOK}
              radius={26}
              shadow={COLOR_FACEBOOK_SHADOW}
              textcolor={COLOR_WHITE}
              text="Login with Facebook"
              callback={this.receiveFacebookCallback}
            />
            <ButtonComponent
              width={width - 48}
              height={48}
              margin={12}
              color={COLOR_MAIN}
              radius={26}
              shadow={COLOR_MAIN_SHADOW}
              textcolor={COLOR_WHITE}
              text="Login with Email"
              callback={this.receiveEmailCallback}
            />
          </View>
        </SafeAreaView>
        {
          isVisibleRegister ? <ModalComponent isVisible={true} renderItem={this.renderRegister} /> : null
        }
        {
          isVisibleLogin ? <ModalComponent isVisible={true} renderItem={this.renderLogin} /> : null
        }
      </React.Fragment>
    )
  }
}

export default LoginScreen;