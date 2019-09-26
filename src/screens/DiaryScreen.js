import React from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  CameraRoll
} from 'react-native'

import TitleComponent from '../components/Titie'
import DiaryComponent from '../components/Diary'
import CardDiaryComponent from '../components/CardDiary'

import { width } from '../constants/size'

class DiaryScreen extends React.Component{
  constructor(props) {
    super(props)
  }
  state = {
    photos: []
  }

  componentDidMount = () => {
    CameraRoll.getPhotos({
      first: 500,
      assetType: 'Photos',
    })
    .then(r => {
      this.setState({ photos: r.edges });
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render() {
    const { photos } = this.state;
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
            {photos.map((photo, i) => {
              return (
                <DiaryComponent key={i} source={photo.node.image.uri}/>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default DiaryScreen;