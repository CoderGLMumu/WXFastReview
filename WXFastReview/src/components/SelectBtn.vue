<template>
  <div>
    <div class="nav">
      <!-- SelectBtn -->
      <div class="leftL" @click="leftLClick" :class=" selectIndex ? 'noselected' : 'selected' ">待审核
        <mt-badge type="error" color="#6665FF">{{badgeNum}}</mt-badge>
      </div>

      <div class="leftR" @click="leftRClick" :class=" selectIndex ? 'selected' : 'noselected' ">已审核</div>
    </div>
    <div class='bot-line'>

    </div>
  </div>
</template>

<script>
  import {
    Badge
  } from "mint-ui";

  export default {
    name: "SelectBtn",

    data() {
      return {
        badgeNum: 'ces',
        selectIndex: 0,
      }
    },

    components: {
      // Badge.name,
      Badge
    },

    methods: {
      leftLClick() {
        this.selectIndex = 0
      },
      leftRClick() {
        this.selectIndex = 1
      }
    },


  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    position: flex;
  }

  .nav {
    display: flex;
  }

  .selected {
    color: #6665FF;
    text-decoration: underline;
  }

  .noselected {
    color: #888;
  }

  .leftL {
    flex: 1;
    text-align: center;
    height: 1.5625rem;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    /* vertical-align:top; */
  }

  .leftR {
    flex: 1;
    text-align: center;
    height: 1.5625rem;;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    /* vertical-align: right; */
  }

  .bot-line {
    width: 325px;
    height: .125rem;
    background-color: rgba(0, 0, 0, .05);
    margin: auto;
    margin-top: .3125rem;
  }
</style>
