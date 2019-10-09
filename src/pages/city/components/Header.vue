<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
  position relative
  height .86rem
  line-height .86rem
  overflow hidden
  color #fff
  text-align center
  background $bgColor
  .header-back
    position absolute
    top 0
    left 0
    width .64rem,
    font-size .4rem
    padding-left .2rem
    color #fff
</style>
