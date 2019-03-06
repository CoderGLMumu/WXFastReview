<template>
  <div class='UserInfo'>
    <img v-lazy="user_details.headPic" alt="" srcset="" v-if="user_details">

    <!-- <span id='infoR'></span> -->
    <span class='username' >{{user_details.userName}}</span>
    <span class='todayArt'>今日审核文章：{{todayArt}}</span>
    <span class='totolArt'>累计审核文章：{{totolArt}}</span>

    <!-- UserInfo -->
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'UserInfo',
    data() {
      return {
        username:'ces',
        todayArt: 'ces',
        totolArt: 'ces',
      }
    },

    computed: {
      ...mapState(['user_details'])
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .username{
    position: absolute;
    vertical-align: right;
    display: inline-block;
    margin-left:.533333rem;
    margin-top: .533333rem;
    /* width:75px;
    height:36px; */
    font-size:25px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(31,49,74,1);
    line-height:36px;
  }
  .todayArt{
    position: absolute;
    /* vertical-align: right; */
    display: inline-block;
    margin-left:.533333rem;
    margin-top: 1.786667rem;
    /* width:134px;
    height:20px; */
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#999;
    line-height:20px;
  }
  .totolArt{
    position: absolute;
    /* width:134px;.. */
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#999;
    line-height:20px;
    margin-left:.533333rem;
    margin-top: 2.48rem;
  }


  .UserInfo img {
    position: relative;
    vertical-align: top;
    /* display:inline-block; */
    width: 2.666667rem;
    height: 2.666667rem;
    overflow: hidden;
    margin-left: .666667rem;
    margin-top: .346667rem;
    border-radius:50%;
    -moz-border-radius:50%;
  }
  /* .myimg{
    display:inline;
    width: 6.25rem;
    height: 6.25rem;
    overflow: hidden;
    top: .8125rem;
    left: 1.5625rem;
    margin-left: 6.67%;
    margin-top: 1.95%;
    border-radius:50%;
-moz-border-radius:50%;
    /* background-color: deeppink; */

</style>
