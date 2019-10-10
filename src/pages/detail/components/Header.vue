<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back" @click="handleBackClick()">&#xe624;</div>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="iconfont header-fixed-back" @click="handleBackClick()">&#xe624;</div>
      <div>景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleBackClick () {
      this.$router.go(-1)
    },
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        const opacity = top / 140
        opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height .86rem
  line-height .86rem
  overflow hidden
  color #fff
  text-align center
  background $bgColor
  .header-fixed-back
    position absolute
    top 0
    left 0
    width .64rem,
    font-size .4rem
    padding-left .2rem
    color #fff
</style>
