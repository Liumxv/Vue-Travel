<template>
  <div>
    <div class="banner" @click="handleBannerClick()">
      <img class="banner-img" :src="this.bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs='this.gallaryImgs' v-show="showGallary" @close="handleGallaryClose()"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fadeAnimation/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>

.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    display flex
    color #fff
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      padding 0 .3rem
      margin-top .14rem
      font-size .24rem
      line-height .32rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
        padding 0 .1rem 0 0
</style>
