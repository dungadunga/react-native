import React from 'react'

import { View, Image, Text, TouchableOpacity } from 'react-native'

import { IMAGE_LOGIN_LOGO } from '../constants/image'
import { COLOR_MAIN, COLOR_SHADOW, COLOR_TEXT_GOOGLE, COLOR_FACEBOOK, COLOR_WHITE } from '../constants/color'

class LoginScreen extends React.Component{
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 24
      }}>
        <Image
          source={IMAGE_LOGIN_LOGO}
          style={{
            width: 120,
            height: 120
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
        <View style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          
          elevation: 2,
        }}>
          <TouchableOpacity style={{
            width: 312,
            height: 48,
            marginTop: 140,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR_WHITE,
            borderRadius: 26,
            }}
          >
            <Text style={{
              color: COLOR_TEXT_GOOGLE,
              fontWeight: '600',
              fontSize: 16
            }}>
              Login with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: 312,
            height: 48,
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR_FACEBOOK,
            borderRadius: 26
          }}>
            <Text style={{
              color: COLOR_WHITE,
              fontWeight: '600',
              fontSize: 16
            }}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: 312,
            height: 48,
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR_MAIN,
            borderRadius: 26
          }}>
            <Text style={{
              color: COLOR_WHITE,
              fontWeight: '600',
              fontSize: 16
            }}>
              Login with Email
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{
            fontSize: 16,
            color: COLOR_MAIN,
            marginTop: 24
          }}
        >
          Don't have an account?{' '}
          <Text style={{
              fontSize: 16,
              color: COLOR_MAIN,
              marginTop: 24,
              fontWeight: '600',
              textDecorationLine: 'underline'
          }} 
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
            Register
          </Text>
        </Text>
      </View>
    )
  }
}

export default LoginScreen;