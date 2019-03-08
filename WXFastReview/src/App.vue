<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'App',

    mounted() {
      // this.getslogo();
    },
    methods: {
      ...mapActions([''])
    },
  }
</script>

<style lang="less">
 @import '../node_modules/vux/src/styles/reset.less';
  .mint-msgbox-content {
    border: 0;
  }

  .mint-msgbox-message {
    margin-top: 0.5875rem;
    /* height: 55.0625rem; */
    font-size: .64rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    /* line-height: 1.05rem; */
  }

  .mint-msgbox {
    width: 8.373333rem;
    height: 5.333333rem;
    background: rgba(255, 255, 255, 1);
    border-radius: .85rem;
  }

  .mint-msgbox-title {
    display: none;

  }
  .mint-msgbox-message{
    color:rgba(31,49,74,1);
    text-align: center;
  }

  .mint-msgbox-btn {
    position: relative;
  }

  .mint-msgbox-cancel {
    float: left;
    width: 2.44rem;
    height: 1.666667rem;
    position: absolute;
    margin-top: 0.50rem;
    margin-left: 4.8rem;
    font-size: .58rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    border: 0;
    color: #999;
  }

  .mint-msgbox-confirm {
    float: left;
    width: 110px;
    height: 44px;
    background: rgba(102, 101, 255, 1);
    border-radius: 100px;
    position: absolute;
    margin-top: 0.725rem;
    margin-left: 1.05rem;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: white;
  }

  .mint-msgbox-btns {
    float: left;
  }

</style>
