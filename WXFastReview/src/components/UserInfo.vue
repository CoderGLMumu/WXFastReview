<template>
  <div class='UserInfo'>
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1218485516,264644399&fm=27&gp=0.jpg" alt="" srcset="">

    <!-- <span id='infoR'></span> -->
    <span class='username'>{{username}}</span>
    <span class='todayArt'>今日审核文章：{{todayArt}}</span>
    <span class='totolArt'>累计审核文章：{{totolArt}}</span>

    <!-- UserInfo -->
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data() {
      return {
        username:'ces',
        todayArt: 'ces',
        totolArt: 'ces',
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .username{
    position: absolute;
    vertical-align: right;
    display: inline-block;
    margin-left:1.25rem;
    margin-top: 1.25rem;
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
    margin-left:1.25rem;
    margin-top: 4.1875rem;
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
    width:134px;
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#999;
    line-height:20px;
    margin-left:1.25rem;
    margin-top: 5.8125rem;
  }


  .UserInfo img {
    position: relative;
    vertical-align: top;
    /* display:inline-block; */
    width: 6.25rem;
    height: 6.25rem;
    overflow: hidden;
    margin-left: 1.5625rem;
    margin-top: .8125rem;
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
