<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display flex
  line-height: .86rem
  background $bgColor
  color #fff
  .header-left
    width: .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    margin-top .12rem
    margin-left .2rem
    padding-left .2rem
    background #fff
    height .62rem
    line-height .62rem
    color #ccc
    border-radius .1rem
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    height 100%
    color #fff
    .arrow-icon
      font-size .24rem
      margin-left -.04rem
</style>
