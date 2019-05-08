import Taro, { Component, Events } from '@tarojs/taro'
import { View, Text, Image, Video, Button, Icon, Progress, Checkbox, Switch, Form, Slider, Picker, PickerView, PickerViewColumn, Swiper, SwiperItem } from '@tarojs/components'

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

    Taro.navigateTo({url: '/v.html'})

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
      <View className='container'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <Image src={namedPng} width="100%" />
          </SwiperItem>
          <SwiperItem>
            <Image src={namedPng} width="100%" />
          </SwiperItem>
          <SwiperItem>
            <Image src={namedPng} width="100%" />
          </SwiperItem>
        </Swiper>
        <Video width='100px' height='100px' src={namedVideo} />
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
        <Image src={namedPng} /> 
      </View>
    )
  }
}
