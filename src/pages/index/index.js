import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'

import './index.scss'

class Index extends Component {

  constructor () {
    super(...arguments)
  }

  componentDidMount() {
    Taro.request({
      url: '/api/login',
      methods: 'POST',
      data: {}
    })
  }
  
  handleRightScroll() { }

  render() {
    return (
      <View>dasdasda</View>
    )
  }
}
export default Index