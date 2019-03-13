<template>
  <!-- Art_contents -->
  <div class="page-down">
    <!-- <scroller :on-infinite="infinit_pendinge" :on-refresh="refresh_pendinge" class="listData" v-if="manuscript_pending_review" v-show="!selectIndex" height="67%" style="top: 5.333rem ">
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
    </scroller> -->

     <!-- <scroller :on-infinite="infinit" :on-refresh="refresh" class="listData" v-if="manuscript_passing" v-show="!selectIndex" height="67%" style="top: 5.333rem">
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
    </scroller> -->

    <scroller :on-infinite="infinit" :on-refresh="refresh" class="listData" v-if="initpage >= 2" height="67%" style="top: 5.333rem">
      <div v-for="(item,index) in items" :key="index" @click="$router.push({name:'Detail',params:item})">

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
    <!-- <section @click="cescescescesces">
      cescescescesces
    </section> -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
  import {
    mapState
  } from 'vuex'
  import {
    debug
  } from 'util';
  export default {
    data() {
      return {
        items: [],
        passing_items: [],
        pending_review_items: [],
        arr: [],
        initpage:Number,
      }
    },
    computed: {
      ...mapState(['manuscript_pending_review', 'manuscript_passing']),
    },
    mounted() {

      this.lockTrue = false
      this.initpage = 0
      this.pageSize_pending = 20
      this.pageNum_pending = 0
      this.pageSize_passing = 20
      this.pageNum_passing = 0
    },

    props: {
      selectIndex: Number
    },

    watch: {
      initpage(newValue, oldValue){

        if (this.initpage == 2) {
          this.selectIndex = 0
          this.pageNum_pending = 1
          this.pageNum_passing = 1
          this.items = this.pending_review_items
          this.$emit('contontinitpage', this.initpage)
        }
      },
      selectIndex(newValue, oldValue) {
        // this.$refs.loadmore.onTopLoaded()

        if (this.initpage < 2) {
          return
        }
        // console.log(this.initpage);

        if (this.selectIndex == 1) {
          this.items = this.passing_items;
        } else {
          this.items = this.pending_review_items;
        }
      },
      manuscript_pending_review(newValue, oldValue) {

        if (this.pageNum_pending == 1) {
          this.pending_review_items = [].concat(newValue.items)
        } else {
          this.pending_review_items = this.pending_review_items.concat(newValue.items)
        }
        this.items = this.pending_review_items;
        if (this.initpage < 2) {
          this.initpage += 1
        }
        if (newValue.lastPage) {
                this.lockTrue = true
              }
      },
      manuscript_passing(newValue, oldValue) {
        if (this.pageNum_passing == 1) {
          this.passing_items = [].concat(newValue.items)
        } else {
          this.passing_items = this.passing_items.concat(newValue.items)
        }
        this.items = this.passing_items;
        if (this.initpage < 2) {
          this.initpage += 1
        }
        if (newValue.lastPage) {
                this.lockTrue = true
              }
      },
    },

    created() {
      // 不会引起DOM变化的数据在此定义

    },

    methods: {

      async infinit(done) {

        if (this.lockTrue) {
          done(true)
          return
        }
        let Parameter
        if (this.selectIndex == 0) {
          this.pageNum_pending += 1
          Parameter = {
            selectIndex: 0,
            pageNo: this.pageNum_pending,
            pageSize: this.pageSize_pending,
            callback: function(pending) {
              if (pending.lastPage) {
                this.lockTrue = true
                done(true)
              } else {
                done()
              }
            }
          }
        } else {
          this.pageNum_passing += 1
          Parameter = {
            selectIndex: 1,
            pageNo: this.pageNum_passing,
            pageSize: this.pageSize_passing,
            callback: (passing) => {
              if (passing.lastPage) {
                this.lockTrue = true
                done(true)
              } else {
                done()
              }
            }
          }
        }
        this.$store.dispatch('get_manuscript', Parameter)
      },

      // 加载刷新数据

      async refresh(done) {
        let Parameter
        if (this.selectIndex == 0) {
          this.pageNum_pending = 1
          Parameter = {
            selectIndex: 0,
            pageNo: this.pageNum_pending,
            pageSize: this.pageSize_pending,
            callback: (pending) => {
              if (pending.lastPage) {
                this.lockTrue = true
                done(true)
              } else {
                done()
              }
            }
          }
        } else {
          this.pageNum_passing = 1
          Parameter = {
            selectIndex: 1,
            pageNo: this.pageNum_passing,
            pageSize: this.pageSize_passing,
            callback: (passing) => {
              if (passing.lastPage) {
                this.lockTrue = true
                done(true)
              } else {
                done()
              }
            }
          }
        }
        this.$store.dispatch('get_manuscript', Parameter)
      },


      // async refresh_pendinge(done) {
      //   let Parameter
      //   if (this.selectIndex == 0) {
      //     this.pageNum_pending = 1
      //     Parameter = {
      //       selectIndex: 0,
      //       pageNo: this.pageNum_pending,
      //       pageSize: this.pageSize_pending,
      //       callback: (pending) => {

      //         done()
      //       }
      //     }
      //   } else {
      //     this.pageNum_passing = 1
      //     Parameter = {
      //       selectIndex: 1,
      //       pageNo: this.pageNum_passing,
      //       pageSize: this.pageSize_passing,
      //       callback: (passing) => {

      //         done()
      //       }
      //     }
      //   }
      //   this.$store.dispatch('get_manuscript', Parameter)
      // },

      // async refresh_passing(done) {
      //   let Parameter
      //   if (this.selectIndex == 0) {
      //     this.pageNum_pending = 1
      //     Parameter = {
      //       selectIndex: 0,
      //       pageNo: this.pageNum_pending,
      //       pageSize: this.pageSize_pending,
      //       callback: (pending) => {
      //         done()
      //       }
      //     }
      //   } else {
      //     this.pageNum_passing = 1
      //     Parameter = {
      //       selectIndex: 1,
      //       pageNo: this.pageNum_passing,
      //       pageSize: this.pageSize_passing,
      //       callback: (passing) => {
      //         done()
      //       }
      //     }
      //   }
      //   this.$store.dispatch('get_manuscript', Parameter)
      // },



      // async infinit_pendinge(done) {
      //   let Parameter
      //   if (this.selectIndex == 0) {
      //     this.pageNum_pending += 1
      //     var MyComponent = Vue.component('Art_contents')

      //     Parameter = {
      //       selectIndex: 0,
      //       pageNo: this.pageNum_pending,
      //       pageSize: this.pageSize_pending,

      //       callback: function(pending) {


      //         if (pending.lastPage) {
      //           // done(true)
      //         } else {
      //           done()
      //         }
      //       }
      //     }
      //   } else {
      //     this.pageNum_passing += 1
      //     Parameter = {
      //       selectIndex: 1,
      //       pageNo: this.pageNum_passing,
      //       pageSize: this.pageSize_passing,
      //       callback: (passing) => {


      //         if (passing.lastPage) {
      //           // done(true)
      //         } else {
      //           done()
      //         }
      //       }
      //     }
      //   }
      //   this.$store.dispatch('get_manuscript', Parameter)
      // },
      // async infinit_passing(done) {
      //   let Parameter

      //   this.pageNum_passing += 1
      //   Parameter = {
      //     selectIndex: 1,
      //     pageNo: this.pageNum_passing,
      //     pageSize: this.pageSize_passing,
      //     callback: (passing) => {


      //       if (passing.lastPage) {
      //         done(true)
      //       } else {
      //         done()
      //       }
      //     }
      //   }

      //   this.$store.dispatch('get_manuscript', Parameter)
      // },

      // cescescescesces: () => {
      //   var MyComponent = Vue.component('Art_contents')

      //   // console.log('cescescescesces');

      // },
    }
  }
</script>

<style>
  section {
    width: 200px;
    background: #000;
    margin-top: -100px;
  }

  .page-down {
    height: 9.88rem;
    background-color: rgb(255, 255, 255);
  }


  /* .row {
      height: 150px;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      color: #444;
      background-color: rgb(107, 236, 32);
    }

    .grey-bg {
      background-color: #eee;
    } */


  /* .scrollerclass {
      margin-top: 5rem;
    } */

  .listData {
    line-height: 1rem;
    flex-grow: 1;
    margin-right: .8rem;
    /* overflow: hidden; */
    top: 14.8rem;
    /* padding-bottom: 14.8rem; */
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

  .listData>div {
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

