import React, { Component } from 'react'
import { View } from '@tarojs/components'


import './index.scss'

interface IProps { }

interface IState { }
export default class Index extends Component<IProps, IState> {

  render() {
    return (
      <View className='index'>
        hello word
      </View>
    )
  }
}
