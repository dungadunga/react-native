import React from 'react'
import { SafeAreaView, View } from 'react-native'

import TitleComponent from '../components/Titie'

class MusicScreen extends React.Component{
  render() {
    return (
      <SafeAreaView>
        <TitleComponent title="Music" isSearch={true}/>
      </SafeAreaView>
    )
  }
}

export default MusicScreen;