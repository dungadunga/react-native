import React from 'react'
import {
  View,
  SafeAreaView
} from 'react-native'

import TitleComponent from '../components/Titie'
import ButtonComponent from '../components/Button'

class CryingScreen extends React.Component{
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick = () => {

  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: COLOR_WHITE,
        }}
      >
        <SafeAreaView style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <TitleComponent title="Baby is Crying!" isSearch={false} />

          <ButtonComponent 
            width={width - 48}
            height={48}
            margin={12}
            color={COLOR_MAIN}
            radius={26}
            shadow={COLOR_MAIN_SHADOW}
            textcolor={COLOR_WHITE}
            text="Apply"
            callback={this.onClick} />
        </SafeAreaView>
      </View>
    )
  }
}

export default CryingScreen