<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.data.errno === 0) {
        this.iconList = res.data.data.iconList
        this.swiperList = res.data.data.swiperList
        this.recommendList = res.data.data.recommendList
        this.weekendList = res.data.data.weekendList
      }
    }
  }
}
</script>
