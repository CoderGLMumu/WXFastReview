<template>
  <div class='container word-wrap'>
    <div class="scroll">
      <div class='detail-title fl'>
        {{writing_manuscript.title}}
      </div>
      <div class="detailcontent fl" v-html='writing_manuscript.content'>
        <!-- {{writing_manuscript.content}} -->
      </div>
    </div>

    <div class="detailbotBtn fl">
      <span class='btnL' @click="confirm(true)">审核通过</span>
      <span class='btnR' @click="confirm(false)">审核不通过</span>
    </div>
  </div>
</template>

<script>
  import {
    MessageBox,
    Toast,
  } from 'mint-ui';
  import {
    mapState
  } from 'vuex';

  export default {
    name: 'Article_list',
    data() {
      return {
        key: String
      }
    },
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
            console.log('11111111111');
            debugger
            let manuscriptReview = {"pass":true,"special":false,"suggestion":"#","manuscriptId":this.$route.params.id}
            let isAuto = false
            this.$store.dispatch('get_review_manuscript',{manuscript:this.$route.params,manuscriptReview:manuscriptReview,isAuto:isAuto,callback:() => {
              Toast('操作成功');
            }})
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
            console.log('2222222222222222');
            debugger
            let manuscriptReview = {"pass":false,"special":false,"suggestion":"#","manuscriptId":this.$route.params.id}
            let isAuto = false
            this.$store.dispatch('get_review_manuscript',{manuscript:this.$route.params,manuscriptReview:manuscriptReview,isAuto:isAuto,callback:() => {
              Toast('操作成功');
            }})


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
      },
    },

      mounted() {

        this.$route.params

        this.$store.dispatch('get_writing_manuscript',this.$route.params.id)
      },
      computed: {
        ...mapState(['writing_manuscript'])
      },
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

  .scroll {
    /* overflow: hidden; */
  }

  .container .detail-title {
    /* width: 188px; */
    /* height: 36px; */
    font-size: 30px;
    font-family: Helvetica;
    color: rgba(31, 49, 74, 1);
    line-height: 36px;
    margin-top: 1.375rem;
    margin-left: 1.875rem;
    margin-right: 1.875rem;

  }

  .word-wrap{
    word-wrap:break-word;
    word-break: break-all;
  }

  ::-webkit-scrollbar {
    display: none;
    /*隐藏滚轮*/
  }

  .container .detailcontent {
    overflow-y: scroll;
    width: 293px;
    /* height: 527px; */
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
