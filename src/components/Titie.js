import React from 'react'
import { View, Text } from 'react-native'
import { COLOR_TEXT } from '../constants/color'

class TitleComponent extends React.Component{
  constructor(props) {
    super(props)
    this.getCurrnetDate = this.getCurrnetDate.bind(this)
  }

  state = {
    time: '',
    month: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }

  getCurrnetDate = (today) => {
    const { month } = this.state
    return `${month[today.getMonth()]} ${today.getDate()}th, ${today.getFullYear()} ${today.getHours()}:${String(today.getMinutes()).padStart(2, '0')}`
  }

  componentDidMount() {
    this.setState({
      time: this.getCurrnetDate(new Date())
    })
    setInterval(() => {
      this.setState({
        time: this.getCurrnetDate(new Date())
      })
    }, 1000)
  }

  render() {
    const { title, isSearch } = this.props;
    const { time } = this.state;
    return (
      <View style={{
        alignItems: 'center',
        width: '100%',
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <Text style={{
            marginLeft: 16,
            marginTop: 24,
            fontSize: 36,
            color: COLOR_TEXT,
            fontWeight: '700'
          }}>
            {title}
          </Text>
          {
            isSearch ?
              <View />
            : <View />
          }
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <Text style={{
            marginLeft: 16,
            marginTop: 4,
            fontSize: 10,
            color: COLOR_TEXT,
            fontWeight: '300'
          }}>
            {time}
          </Text>
          <View/>
        </View>
      </View>
    )
  }
}

export default TitleComponent;