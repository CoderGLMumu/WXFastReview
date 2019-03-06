<template>
  <div>
    <div class="nav">
      <!-- SelectBtn -->
      <div class="leftL" @click="leftLClick" :class=" selectIndex ? 'noselected' : 'selected' ">待审核
        <mt-badge type="error" color="#6665FF" v-if="manuscript_pending_review.items" >{{manuscript_pending_review.items.length}}</mt-badge>
      </div>
<!-- manuscript.items.length -->
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
  import {
    mapState
  } from 'vuex'

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
        this.$emit('selectClick',this.selectIndex)
      },
      leftRClick() {
        this.selectIndex = 1
        this.$emit('selectClick',this.selectIndex)
      }
    },

    computed: {
    ...mapState(['manuscript_pending_review'])
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
    height: .8rem;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    /* vertical-align:top; */
  }

  .leftR {
    flex: 1;
    text-align: center;
    height: .8rem;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    /* vertical-align: right; */
  }

  .bot-line {
    width: 8.666667rem;
    height: .026667rem;
    background-color: rgba(0, 0, 0, .05);
    margin: auto;

  }
</style>
