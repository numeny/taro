import Taro, { Component, Events } from '@tarojs/taro'
import { View, Text, Image, Input, Video, Button, Icon, Progress, Checkbox, Switch, Form, Slider, Picker, PickerView, PickerViewColumn, Swiper, SwiperItem, Navigator } from '@tarojs/components'

import Welcome from './welcome'
import Clock from './clock'
import Toggle from './toggle'

import './index.scss'
import namedJson from './1.json'
import namedPng from '@images/index/1.jpeg'
import namedVideo from '@res/video/1.mp4'

export default class Index extends Component {

  constructor(props) {
    super(props)
    const events = new Events()
    // events.on('click_button', this.click_button.bind(this))
    this.state = {isOn: false}
  }

  click_button (e) {
    let b = this.state.isOn

    Taro.showToast({title: Adef})

    Taro.navigateTo({url: '/pages/rhdetail/rhdetail'})

    this.setState({isOn: !b})

    Taro.showNavigationBarLoading();
  }

  onClick () {
    Taro.showToast({title: "onClick"})
    const events = new Events()
    events.trigger('click_button')
  }

  render () {
    return (
      <View className='top-container'>
        <View className='top-title-container'>
          <Image className='top-title-back' />
          <Text className='top-title-city'> city </Text>
          <Input type='text' placeholder='look up resthome' className='top-title-input' />
          <Text className='top-title-menu'> menu </Text>
        </View>

        <View className='classify-title-container'>
          <Text className='classify-title-item'> 价格 </Text>
          <Text className='classify-title-item'> 床位数 </Text>
          <Text className='classify-title-item'> 类型 </Text>
          <Text className='classify-title-item'> 性质 </Text>
        </View>
        <Video width='150px' height='190px' src={namedVideo} />
        <View className='rh-list-container'>
          <View className='rh-one-container' onClick={this.click_button.bind(this)}>
            <Image src={namedPng} className='rh-one-img'/>
            <View className='rh-one-desc-container'>
              <Text className='rh-one-desc-head'> my red</Text>
              <Text className='rh-one-desc'> my red</Text>
              <Text className='rh-one-desc'> my red</Text>
            </View>
          </View>
          <Navigator url='/pages/rhdetail/rhdetail' className='rh-one-container'>
          <View className='rh-one-container'>
            <Image src={namedPng} className='rh-one-img'/>
            <View className='rh-one-desc-container'>
              <Text className='rh-one-desc-head'> my red</Text>
              <Text className='rh-one-desc'> my red</Text>
              <Text className='rh-one-desc'> my red</Text>
            </View>
          </View>
          </Navigator>
        </View>
        <Image src={namedPng} />
        <Button size='mini' >按钮</Button>
        <View> {Taro.getEnv()} </View>
        <Button size='mini' type='warn' onClick={this.click_button.bind(this)}>按钮</Button>
        <View> {this.state.isOn ? 'On' : 'Off'} </View>
        <View>
        from json file, namedJson.x: {namedJson.x}
        </View>
        <Welcome />
        <Clock />
        <Toggle />
      </View>
    )
  }
}
