import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Video } from '@tarojs/components'
import './index.scss'
import namedJson from './1.json'
import namedPng from './1.jpeg'
import namedVideo from './1.mp4'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='ignore'>
        hello
      <View>
        from json file, namedJson.x: {namedJson.x}
      </View>
        <Image src={namedPng} />
        <Video width='100px' height='100px' src={namedVideo} />
      </View>
    )
  }
}
