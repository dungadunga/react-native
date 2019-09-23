import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'

import InputComponent from '../components/Input'
import ButtonComponent from '../components/Button'

import {
  COLOR_WHITE,
  COLOR_MODAL_BAR,
  COLOR_MAIN,
  COLOR_MAIN_SHADOW,
} from '../constants/color'
import { width, height } from '../constants/size'

class RegisterScreen extends React.Component{
  constructor(props) {
    super(props)

    this.recevieEmailCallback = this.recevieEmailCallback.bind(this)
    this.receviePasswordCallback = this.receviePasswordCallback.bind(this)
    this.recevieRePasswordCallback = this.recevieRePasswordCallback.bind(this)
    this.receviePhoneCallback = this.receviePhoneCallback.bind(this)
    this.recevieVerificationCallback = this.recevieVerificationCallback.bind(this)
    this.onMakeAccount = this.onMakeAccount.bind(this)
  }

  state = {
    email: '',
    password: '',
    repassword: '',
    phone: '',
    verification: ''
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

  recevieRePasswordCallback = (data) => {
    this.setState({
      repassword: data
    })
  }

  receviePhoneCallback = (data) => {
    this.setState({
      phone: data
    })
  }

  recevieVerificationCallback = (data) => {
    this.setState({
      verification: data
    })
  }

  onMakeAccount = () => {
    console.log(this.state)
  }
  
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
            width: 28,
            height: 4,
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
                Make Account
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
            <InputComponent
              label="Retype Password"
              placeholder="Your Password here."
              type="password"
              callback={this.recevieRePasswordCallback}
            />
            <InputComponent
              label="Phone"
              placeholder="Your Phone Number here."
              type="tel"
              button="Quote"
              callback={this.receviePhoneCallback}
            />
            <InputComponent
              label="Phone Quotation"
              placeholder="Quotation Number here."
              type="off"
              button="Confirm"
              callback={this.recevieVerificationCallback}
            />
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
              text="Make Account"
              callback={this.onMakeAccount}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default RegisterScreen;