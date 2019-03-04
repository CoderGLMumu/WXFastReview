<template>
  <!-- Art_contents -->
  <div class="page-loadmore">
    <!-- 
    <p class="page-loadmore-desc">translate : {{ translate }}</p>-->
    <!-- <div
        class="loading-background"
        :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }"
    >translateScale : {{ moveTranslate }}</div>-->
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
        :top-method="loadTop"
        @translate-change="translateChange"
        @top-status-change="handleTopChange"
        ref="loadmore"
      >
        <ul class="page-loadmore-list listData">
          <li v-for="(item,index) in list" class="page-loadmore-listitem" :key="index">
            <div class="xh">{{ index + 1 }}</div>
            <div class="des">
              <div class="title">文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题</div>
              <div>
                <span class="username">用户名</span>
                <span class="sub_time">22:22</span>
              </div>
            </div>
          </li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
export default {
  name: "Art_contents",
  data() {
    return {
      list: [],
      topStatus: "",
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0
    };
  },

  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop() {
      setTimeout(() => {
        let firstValue = this.list[0];
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    }
  },

  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  },

  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listData .title {
  margin-bottom: .375rem;
  font-size: 18px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(31, 49, 74, 1);
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.listData .des {
  margin-left: 1.3125rem;
  width: 17.9375rem;
}

.listData .username {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(31, 49, 74, 0.3);
  line-height: 21px;
}

.listData li{
  margin-bottom: 1.875rem;
}

.listData .sub_time {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(31, 49, 74, 0.3);
  line-height: 21px;
  margin-left: .7rem;
}
.listData li {
  /* box-sizing: border-box; */
  overflow: hidden;
  margin-left: 1.5625rem;
}
.listData li > div {
  float: left;
  /* box-sizing: border-box; */
}
.listData li .xh {
  width: 9px;
  height: 21px;
  font-size: 18px;
  font-family: Helvetica;
  color: rgba(0, 0, 0, .5);
  line-height: 28px;
}


</style>
