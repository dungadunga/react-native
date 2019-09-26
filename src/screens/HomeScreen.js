import React from 'react'
import {
  SafeAreaView,
  View,
  Text
} from 'react-native'
import { LineChart, Grid } from 'react-native-svg-charts'

import TitleComponent from '../components/Titie'
import CardAtomComponent from '../components/CardAtom'

import {
  IMAGE_CARD_DEAD,
  IMAGE_SEARCH,
  IMAGE_VIDEO
} from '../constants/image'
import { getHeight, getWidth } from '../constants/size'
import { COLOR_MAIN, COLOR_WHITE, COLOR_TRANSPARENT } from '../constants/color'

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

class HomeScreen extends React.Component{
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({
    header: null,
  })

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
      }}>
        <TitleComponent title="Monitor" isSearch={false} />
        <View style={{
          flexDirection: 'row',
          marginTop: 16,
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <CardAtomComponent
            icon={IMAGE_CARD_DEAD}
            buttonIcon={IMAGE_SEARCH}
            buttonContent='Learn how to care'
            heading='Baby status'
            isStatus={true}
            status='Crying'
            buttonIconHeight={getHeight(12)}
          />

          <CardAtomComponent
            icon={IMAGE_CARD_DEAD}
            buttonIcon={IMAGE_VIDEO}
            buttonContent='Watch baby status'
            heading='Baby in cradle'
            isStatus={false}
            buttonIconHeight={getHeight(7)}
          />
        </View>
        <View style={{
          marginTop: getHeight(16),
          width: getWidth(328),
          height: getHeight(200),
          backgroundColor: COLOR_MAIN,
          borderRadius: 16,
          padding: 16
        }}>
          <Text style={{
            width: '100%',
            fontSize: 14,
            color: COLOR_WHITE,
            fontWeight: '600',
          }}>Cradle status</Text>
          <Text style={{
            fontSize: 10,
            color: COLOR_WHITE,
            width: '100%'
          }}>Not bad</Text>
          <LineChart
            style={{
              height: getHeight(120)
            }}
            data={data}
            svg={{
              stroke: COLOR_WHITE,
              strokeWidth: 2
            }}
            backgroundColor={COLOR_TRANSPARENT}
            contentInset={{ top: 20, bottom: 20 }}
            min={0}
            max={40}
            showGrid={false}
            animate={true}
          />
          <View style={{
            
          }}>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default HomeScreen;
