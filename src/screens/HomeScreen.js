import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image
} from 'react-native'
import { LineChart } from 'react-native-svg-charts'

import StatusScreen from './StatusScreen'
import CheckScreen from './CheckScreen'
import CryingScreen from './CryingScreen'

import TitleComponent from '../components/Titie'
import CardAtomComponent from '../components/CardAtom'
import ModalComponent from '../components/Modal'

import {
  IMAGE_CARD_DEAD,
  IMAGE_SEARCH,
  IMAGE_VIDEO,
  IMAGE_TEMPERATURE,
  IMAGE_HUMID
} from '../constants/image'
import { getHeight, getWidth } from '../constants/size'
import { COLOR_MAIN, COLOR_WHITE, COLOR_TRANSPARENT } from '../constants/color'

class HomeScreen extends React.Component{
  constructor(props) {
    super(props)

    this.onClickStatus = this.onClickStatus.bind(this)
    this.renderStatus = this.renderStatus.bind(this)
    this.onClickCheck = this.onClickCheck.bind(this)
    this.onClickCheckFalse = this.onClickCheckFalse.bind(this)
    this.onCrying = this.onCrying.bind(this)
  }

  state = {
    isStatus: false,
    isCheck: false,
    data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
    isCrying: false
  }

  static navigationOptions = ({
    header: null,
  })
  
  renderStatus = () => <StatusScreen />
  renderCheck = () => <CheckScreen onClick={this.onClickCheckFalse} />
  renderCrying = () => <CryingScreen />

  onClickStatus = () => {
    this.setState({
      isStatus: false
    }, () => this.setState({
      isStatus: true
    }))
  }

  onClickCheck = () => {
    this.setState({
      isCheck: false
    }, () => this.setState({
      isCheck: true
    }))
  }

  onCrying = () => {
    this.setState({
      isCrying: false
    }, () => this.setState({
      setState: true
    }))
  }

  onClickCheckFalse = () => {
    this.setState({
      isCheck: false
    })
  }

  render() {
    const { isStatus, isCheck, isCrying, data } = this.state;
    return (
      <React.Fragment>
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
              callback={this.renderCrying}
            />
            <CardAtomComponent
              icon={IMAGE_CARD_DEAD}
              buttonIcon={IMAGE_VIDEO}
              buttonContent='Watch baby status'
              heading='Baby in cradle'
              isStatus={false}
              buttonIconHeight={getHeight(7)}
              callback={this.onClickCheck}
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
                strokeWidth: 2.5
              }}
              backgroundColor={COLOR_TRANSPARENT}
              contentInset={{ top: 20, bottom: 20 }}
              min={0}
              max={40}
              showGrid={false}
              animate={true}
            />
            <View style={{
              paddingHorizontal: 56,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <View style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: COLOR_WHITE,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image source={IMAGE_TEMPERATURE} style={{
                    width: 16,
                    height: 16
                  }}/>
                </View>
                <Text style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: COLOR_WHITE,
                  marginLeft: 16
                }}>26°C</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <View style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: COLOR_WHITE,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image source={IMAGE_HUMID} style={{
                    width: 16,
                    height: 16
                  }}/>
                </View>
                <Text style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: COLOR_WHITE,
                  marginLeft: 16
                }}>36%</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        {isStatus ? <ModalComponent isVisible={true} renderItem={this.renderStatus} /> : null}
        {isCheck ? <ModalComponent isVisible={true} renderItem={this.renderCheck} /> : null}
        {isCrying ? <ModalComponent isVisible={true} renderItem={this.renderCrying} /> : null}
      </React.Fragment>
    )
  }
}

export default HomeScreen;
