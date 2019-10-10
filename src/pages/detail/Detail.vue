<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.errno === 0) {
        this.sightName = res.data.data.sightName
        this.bannerImg = res.data.data.bannerImg
        this.gallaryImgs = res.data.data.gallaryImgs
        this.categoryList = res.data.data.categoryList
      }
      console.log(res.data.data)
    }
  }
}
</script>

<style lang="stylus" scoped>

.content
  height 50rem
</style>
