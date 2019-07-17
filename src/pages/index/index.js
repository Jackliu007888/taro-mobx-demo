import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import {  observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('shopStore')
@observer
class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      goods: [],
      couponList: [],
      allGoodList: [],
      isShowAction: false,
      scrollIntoView: '',
    }
  }
  
  handleRightScroll() { }

  render() {
    // const shopInfo = this.props.shopStore.shopInfo

    // 下面并没有正常编译 没有定义 shopInfo
    // 取消下面一行的注释是正常的
    // debugger

    const {
      shopStore: {
        shopInfo
      } = {}
    } = this.props


    const {
      goods = [],
      couponList,
      isShowAction,
      allGoodList,
      scrollIntoView,
    } = this.state

    const shopLogoUrl = shopInfo.logo || ''

    const renderCouponsFragment = couponList.length && (
      <View className='coupons'>
        coupons
      </View>
    )

    return (
      <View className='order-page'>
        <ScrollView
          scrollY={!isShowAction}
          className='page-scroll'
          onScroll={this.handleRightScroll.bind(this)}
          scrollIntoView={scrollIntoView}
          scrollWithAnimation
        >
          {shopLogoUrl}
          {renderCouponsFragment}
          {
            !goods.length ? null : (
              <View className='bottom'>
                <View className='food-content'>
                  <View className='scroll-left-wrapper'>
                  </View>
                  <View className='scroll-right-wrapper'>
                    <ScrollView scrollY={!isShowAction} class='scroll-right' onScroll={this.handleRightScroll.bind(this)}>
                    {
                      allGoodList.map(good => {
                        if (good._type !== 'title') {
                          return (
                            <View key={good.id}>goods</View>
                          )
                        }
                        
                        return (
                          <View key={good.id}>good</View>
                        )
                      })
                    }
                    </ScrollView>
                  </View>
                </View>
              </View>                
            )
          }
        </ScrollView>     
      </View>
    )
  }
}
export default Index