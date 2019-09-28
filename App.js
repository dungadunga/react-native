/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Image } from 'react-native'
import { Provider } from 'mobx-react'
import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { BottomTabBar } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import axios from 'axios'

import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import MusicScreen from './src/screens/MusicScreen'
import DiaryScreen from './src/screens/DiaryScreen'
import MypageScreen from './src/screens/MypageScreen'

import TabBarComponent from './src/components/TabBar'

import stores from './src/stores';
import { COLOR_WHITE, COLOR_BLACK } from './src/constants/color';
import { IMAGE_HOME_ACTIVE, IMAGE_MUSIC_ACTIVE, IMAGE_DIARY_ACTIVE, IMAGE_MYPAGE_ACTIVE, IMAGE_DIARY_INACTIVE, IMAGE_HOME_INACTIVE, IMAGE_MUSIC_INACTIVE, IMAGE_MYPAGE_INACTIVE } from './src/constants/image';

class App extends React.Component{
  constructor(props) {
    super(props)

    axios.defaults.baseURL = 'http://ec2-52-79-236-77.ap-northeast-2.compute.amazonaws.com:3000/api/';
    axios.defaults.timeout = 10000;
    axios.defaults.headers.common['Accept'] = '*/*';
  }
  
  componentDidMount = async () => {
    if (Platform.OS === "android") {
      const readStoragePerm = await PermissionsAndroid.check(
        "android.permission.READ_EXTERNAL_STORAGE"
      )
      if (!readStoragePerm) {
        await PermissionsAndroid.request(
          "android.permission.READ_EXTERNAL_STORAGE"
        ).then(res => {
          if (res === "denied" || res === "never_ask_again") {
            BackHandler.exitApp();
          }
        })
      }
      const writeStoragePerm = await PermissionsAndroid.check(
        "android.permission.WRITE_EXTERNAL_STORAGE"
      );
      if (!writeStoragePerm) {
        await PermissionsAndroid.request(
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ).then(res => {
          if (res === "denied" || res === "never_ask_again") {
            BackHandler.exitApp();
          }
        })
      }
    }

    const netInfo = await NetInfo.isConnected.fetch();

    !netInfo &&
    Alert.alert(
      "알림",
      "인터넷이 연결되어 있지 않습니다.\n앱을 종료합니다.",
      [{ text: "확인", onPress: () => BackHandler.exitApp() }],
      { cancelable: false }
    )
  }
  
  render() {
    return (
      <Provider {...stores}>
        <AppContainer />
      </Provider>
    )
  }
}

const LoginStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        height: 0,
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        height: 0,
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const MusicStack = createStackNavigator(
  {
    Music: { screen: MusicScreen }
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        height: 0,
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const DiaryStack = createStackNavigator(
  { 
    Diary: { screen: DiaryScreen }
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        height: 0,
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const MypageStack = createStackNavigator(
  { 
    Diary: { screen: MypageScreen }
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        height: 0,
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const MainStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          return (
            <TabBarComponent
              focusedSource={IMAGE_HOME_ACTIVE}
              label='Home'
              unfocusedSource={IMAGE_HOME_INACTIVE}
              isFocused={focused} />
          )
        },
        title: '',
      })
    },
    // Music: {
    //   screen: MusicStack,
    //   navigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //       const { routeName } = navigation.state;
    //       return (
    //         <TabBarComponent
    //           focusedSource={IMAGE_MUSIC_ACTIVE}
    //           unfocusedSource={IMAGE_MUSIC_INACTIVE}
    //           label='Cradle'
    //           isFocused={focused} />
    //       )
    //     },
    //     title: '',
    //   })
    // },
    Diary: {
      screen: DiaryStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          return (
            <TabBarComponent
              focusedSource={IMAGE_DIARY_ACTIVE}
              unfocusedSource={IMAGE_DIARY_INACTIVE}
              label='Dairy'
              isFocused={focused} />
          )
        },
        title: '',
      })
    },
    Mypage: {
      screen: MypageStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <TabBarComponent
              focusedSource={IMAGE_MYPAGE_ACTIVE}
              unfocusedSource={IMAGE_MYPAGE_INACTIVE}
              label='Mypage'
              isFocused={focused} />
          )
        },
        title: '',
      })
    },
  },
  {
    defaultNavigationOptions: ({
      activeColor: COLOR_BLACK,
      inactiveColor: COLOR_BLACK,
      barStyle: { backgroundColor: COLOR_WHITE }
  })
  }
)

const MainSwitch = createSwitchNavigator({
  Login: LoginStack,
  Main: MainStack
})

const AppContainer = createAppContainer(MainSwitch);

export default App;
