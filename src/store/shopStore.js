import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const timeOut = time => setTimeout(Promise.resolve, time)

const shopStore = observable({
  shopInfo: {},
  activityId: '',
  shopCoupons: observable([]),
  homeCoupons: observable([]),
  rechargeCoupons: observable([]),
  shopList: observable([]),
  collectShopList: observable([]),
  categoryList: observable([]),
  goodsInfo: {},
  goodsList: observable([]),
  cityList: observable([]),
  // 获取门店列表
  async getShopList() {
    await timeOut(1000)
    return []
  },
})

export default shopStore