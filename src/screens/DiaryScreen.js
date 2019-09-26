import React from 'react'
import { SafeAreaView, View } from 'react-native'

import TitleComponent from '../components/Titie'

class DiaryScreen extends React.Component{
  render() {
    return (
      <SafeAreaView>
        <TitleComponent title="Diary" isSearch={true}/>
      </SafeAreaView>
    )
  }
}

export default DiaryScreen;