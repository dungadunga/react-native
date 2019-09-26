import React from 'react'
import { SafeAreaView, View } from 'react-native'

import TitleComponent from '../components/Titie'

class MypageScreen extends React.Component{
  render() {
    return (
      <SafeAreaView>
        <TitleComponent title="My Page" isSearch={true}/>
      </SafeAreaView>
    )
  }
}

export default MypageScreen;