<template>
  <div class='container'>
    <div class="srcool">
      <div class='detail-title fl'>
        Introduction
      </div>
      <div class="detailcontent fl">
        是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是
      </div>
    </div>

    <div class="detailbotBtn fl">
      <span class='btnL' @click="confirm(true)">1111</span>
      <span class='btnR' @click="confirm(false)">2222</span>
    </div>
  </div>
</template>

<script>
  import {
    MessageBox
  } from 'mint-ui';

  export default {
    name: 'Article_list',
    components: {

    },
    methods: {
      confirm(isconfirm) {
        let msgbox=document.getElementsByClassName("mint-msgbox-message")[0];
          let innerTitle1=document.getElementsByClassName("innerTitle")[0];
          let innerTitle2=document.getElementsByClassName("innerTitle")[1];
          if (innerTitle1) {
            msgbox.removeChild(innerTitle1);
          }
          if (innerTitle2) {
            msgbox.removeChild(innerTitle2);
          }
        if (isconfirm) {
          MessageBox.confirm(`确认要审核`,{
            confirmButtonText:'确认',
            cancelButtonText:'点错了',
          }).then(action => {
            console.log('suresuresure');
          });
          setTimeout(() => {
            let msgbox=document.getElementsByClassName("mint-msgbox-message")[0];
            if (msgbox) {
              var SpanRed = document.createElement("span");
              var SpanBlack = document.createElement("span");
              SpanRed.innerText='通过';
              SpanRed.style.color='red';
              SpanBlack.innerText='吗？';
              SpanBlack.style.color='black';
              SpanBlack.className = 'innerTitle';
              SpanRed.className = 'innerTitle';
              msgbox.appendChild(SpanRed);
              msgbox.appendChild(SpanBlack);
          }
          }, 50);
        } else {
          MessageBox.confirm('确认要审核',{
            confirmButtonText:'确认',
            cancelButtonText:'点错了'
          }).then(action => {
            console.log('suresuresure');
          });
          setTimeout(() => {
            let msgbox=document.getElementsByClassName("mint-msgbox-message")[0];
            if (msgbox) {
              var SpanRed = document.createElement("span");
              var SpanBlack = document.createElement("span");
              SpanRed.innerText='不通过';
              SpanRed.style.color='red';
              SpanBlack.innerText='吗？';
              SpanBlack.style.color='black';
              SpanBlack.className = 'innerTitle';
              SpanRed.className = 'innerTitle';
              msgbox.appendChild(SpanRed);
              msgbox.appendChild(SpanBlack);
          }
          }, 50);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    position: relative;
    /* overflow: hidden;
    width: 100%;
    height: 100%; */
  }

  .srcool {
    /* overflow: auto; */
  }

  .container .detail-title {
    width: 188px;
    height: 36px;
    font-size: 30px;
    font-family: Helvetica;
    color: rgba(31, 49, 74, 1);
    line-height: 36px;
    margin-top: 1.375rem;
    margin-left: 1.875rem;
    margin-right: 1.875rem;
  }

  ::-webkit-scrollbar {
    display: none;
    /*隐藏滚轮*/
  }

  .container .detailcontent {
    overflow-y: scroll;
    width: 293px;
    height: 527px;
    font-size: 19px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgb(134, 134, 134);
    line-height: 30px;
    margin-top: 1.375rem;
    margin-left: 1.875rem;
    margin-right: 1.875rem;
    text-align: left;
  }

  .fl {
    float: left;
  }

  .detailbotBtn {
    /* display: flex; */
    /* position: fixed; */
    width: 100%;
    margin-top: 38.6875rem;
    position: absolute;
  }

  .btnL {
    float: left;
    width: 50%;
    position: flex;
    /* flex: 1; */
    height: 3rem;
    background: rgba(102, 101, 255, 1);
    /* box-shadow:0px -1px 22px 0px rgba(52,84,122,0.08); */
    text-align: center;
    line-height: 3rem;
    color: white;
    z-index: 99;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .btnR {
    width: 50%;
    float: right;
    position: flex;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    /* flex: 1; */
    height: 3rem;
    background: #ccc;
    /* box-shadow:0px -1px 22px 0px rgba(52,84,122,1); */
    text-align: center;
    line-height: 3rem;
    z-index: 99;
  }
</style>
