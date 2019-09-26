import React from 'react'
import {
  SafeAreaView,
  View,
  ScrollView
} from 'react-native'

import TitleComponent from '../components/Titie'
import DiaryComponent from '../components/Diary'
import CardDiaryComponent from '../components/CardDiary'

import { width } from '../constants/size'

class DiaryScreen extends React.Component{
  render() {
    return (
      <SafeAreaView>
        <TitleComponent title="Diary" isSearch={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 16,
          }}
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              marginHorizontal: 16,
              flexDirection: 'row',
              marginTop: 16,
              width: '100%'
            }}
          >
            <CardDiaryComponent isAdd={true} />
            <CardDiaryComponent isAdd={false} />
            <CardDiaryComponent isAdd={false} />
            <CardDiaryComponent isAdd={false} />
          </ScrollView>
          <View
            style={{
              marginTop: 16,
              width: width,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
            <DiaryComponent />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default DiaryScreen;