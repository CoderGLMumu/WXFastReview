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

<style>
  .mint-msgbox-content {
    border: 0;
  }

  .mint-msgbox-message {
    margin-top: 0.6875rem;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    line-height: 33px;
  }

  .mint-msgbox {
    width: 314px;
    height: 200px;
    background: rgba(255, 255, 255, 1);
    border-radius: 28px;
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
    width: 110px;
    height: 44px;
    position: absolute;
    margin-top: 2.125rem;
    margin-left: 10.375rem;
    font-size: 18px;
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
    margin-top: 2.125rem;
    margin-left: 2.9375rem;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: white;
  }

  .mint-msgbox-btns {
    float: left;
  }
</style>
