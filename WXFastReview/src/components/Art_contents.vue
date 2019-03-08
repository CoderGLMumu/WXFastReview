<template>
  <!-- Art_contents -->
  <div >
    <scroller :on-refresh="refresh" class="page-down listData" v-show="!selectIndex">
      <div v-for="(item,index) in manuscript_pending_review.items" :key="index" @click="$router.push({name:'Detail',params:item})">

        <div class="xh">{{ index + 1 }}</div>
        <div class="des">
          <div class="title">{{item.title}}</div>
          <div>
            <span class="username">{{item.mediumName}}</span>
            <span class="sub_time">{{item.createTime}}</span>
          </div>
        </div>
      </div>
    </scroller>

    <scroller :on-refresh="refresh" class="page-down listData" v-show="selectIndex">
      <div v-for="(item,index) in manuscript_passing.items" :key="index" @click="$router.push({name:'Detail',params:item})">

        <div class="xh">{{ index + 1 }}</div>
        <div class="des">
          <div class="title">{{item.title}}</div>
          <div>
            <span class="username">{{item.mediumName}}</span>
            <span class="sub_time">{{item.createTime}}</span>
          </div>
        </div>
      </div>
    </scroller>

  </div>
</template>

<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        items: []
      }
    },
    computed: {
      ...mapState(['manuscript_pending_review', 'manuscript_passing']),
    },
    mounted() {

      this.refresh()

    },

    props: {
      selectIndex: Number
    },

    watch: {
      selectIndex(newValue, oldValue) {
        // this.$refs.loadmore.onTopLoaded()
      },
    },

    created() {
      // 不会引起DOM变化的数据在此定义

    },

    methods: {

      // 加载刷新数据
      async refresh() {
        let Parameter
        if (this.selectIndex == 0) {
          Parameter = {
            selectIndex: 0,
            pageNo: 1,
            pageSize: 99,
            callback: () => {
              if (this.$refs.loadmore) {
                debugger
                this.$refs.loadmore.onTopLoaded();
              }
            }
          }
        } else {
          Parameter = {
            selectIndex: 1,
            pageNo: 1,
            pageSize: 99,
            callback: () => {
              if (this.$refs.loadmore) {
                debugger
                this.$refs.loadmore.onTopLoaded();
              }
            }
          }
        }
        debugger
        this.$store.dispatch('get_manuscript', Parameter)
      },
    }
  }
</script>

<style>
  .page-down {
    /* width: 100%;
        height:100%; */
    /* margin-top: 2.667rem; */
     margin-top: 5.667rem;
  }

  .row {
    height: 150px;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }

  .grey-bg {
    background-color: #eee;
  }

  .scrollerclass {
    margin-top: 5rem;
  }

  .listData .title {
    /* margin-bottom: .375rem; */
    font-size: 0.48rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(31, 49, 74, 1);
    /* line-height: 0.69rem; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: .833rem;
  }

  .listData {
    line-height: 1rem;
    flex-grow: 1;
    margin-right: .8rem;
    overflow: hidden;
  }

  .listData .des {
     margin-right: .466667rem;
        /* width: 7.466667rem; */
  }

  .listData .username {
    font-size: 0.4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(31, 49, 74, 0.3);
    line-height: 0.56rem;
    margin-left: .833rem;
  }

  .listData .sub_time {
    font-size: .4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(31, 49, 74, 0.3);
    line-height: .56rem;
    margin-left: .533333rem;
  }

  .listData >div {
    /* float: left; */
    /* box-sizing: border-box; */
    margin-left: .533rem;
  }

  .listData .xh {
    /* float: left; */
    /* width: .24rem;
          height: .56rem; */
    position: absolute;
    font-size: .48rem;
    font-family: Helvetica;
    color: rgba(0, 0, 0, .5);
    margin-left: .133rem;
    /* line-height: 0.68rem; */
  }
</style>

