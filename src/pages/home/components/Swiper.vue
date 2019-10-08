<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key = item.id>
        <img class="swiper-img" :src='item.imgUrl' alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/4ee887fbd9982813f1463965192ec174.jpg_750x200_b554748b.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 25%
  background-color #ccc
  .swiper-img
    width 100%
</style>
