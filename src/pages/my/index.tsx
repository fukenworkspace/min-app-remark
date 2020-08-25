import React, { Component } from 'react'
import { View } from '@tarojs/components'


import './index.scss'

interface IProps { }

interface IState { }
export default class MyCenterIndex extends Component<IProps, IState> {

  render() {
    return (
      <View className='index'>
        个人中心
      </View>
    )
  }
}
