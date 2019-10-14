<template>
  <div class="detail-content">
    <div class="content-left">
      <span class="score">{{score}}分 <span class="score-level">{{level}}</span></span>
      <div class="comment">{{commentNum}}条评论</div>
      <div class="iconfont back-icon">&#xe600;</div>
    </div>
    <div class="content-right">
      <p>景点简介</p>
      <p class="right-detail">开放时间、贴士</p>
      <div class="iconfont back-icon">&#xe600;</div>
    </div>
    <div class="address">
      <div class="iconfont location-icon">&#xe60b;</div>
      江苏省 南通市 崇川区 桃园路8号 桃园路8号 桃园路8号 中南世纪城8幢 601室
      <div class="iconfont back-icon">&#xe600;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailContent',
  data () {
    return {
      score: '4.9',
      level: '很棒',
      commentNum: '2900'
    }
  }
}
</script>

<style lang="stylus" scoped>

.detail-content
  padding .1rem .2rem
  line-height .42rem
  .content-left
    position relative
    display inline-block
    width 50%
    .score
      font-size .32rem
      .score-level
        font-size .28rem
    .comment
      font-size .24rem
      color #777
      padding-left .2rem
  .content-right
    display inline-block
    width 50%
    position relative
    .right-detail
      font-size .24rem
      color #777
  span
    color red
    padding 0 .2rem
  .address
    position relative
    height .6rem
    line-height .32rem
    padding .1rem .6rem
.back-icon
  position absolute
  right .2rem
  top .15rem
.location-icon
  position absolute
  left .1rem
  top .2rem
</style>
