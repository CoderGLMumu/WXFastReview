<template>
  <div class='art_list_bg no-bar'>
    <!-- userInfo -->
    <UserInfo class="UserInfo" v-if="user_details.userName" />
    <!-- selectBtn -->
    <SelectBtn class="SelectBtn" @selectClick = 'updateSelectData' v-if="user_details.userName" />
    <!-- Art_contents -->
    <Art_contents class="Art_contents" :selectIndex = selectIndex v-if="manuscript_passing" />
  </div>
</template>

<script>
  import Art_contents from '../components/Art_contents'
  import SelectBtn from '../components/SelectBtn'
  import UserInfo from '../components/UserInfo'

  import {
    mapState
  } from 'vuex'

  export default {
    name: 'Article_list',
    components: {
      Art_contents,
      SelectBtn,
      UserInfo
    },

    data() {
      return {
        selectIndex: 0,
      }
    },
    methods: {
      updateSelectData(selectIndex){
        this.selectIndex = selectIndex;
      }
    },
    // mounted() {
    //   // this.getslogo();
    //   // setTimeout(() => {
    //   //   this.getuser_details();
    //   // }, 1000);
    //   // this.req_simulated_logo();
    // },
    computed: {
     ...mapState(['user_details','manuscript_pending_review','manuscript_passing'])
    },
    mounted () {
      this.$store.dispatch('getslogo').then(this.$store.dispatch('getuser_details'))
      let Parameter1 = {selectIndex : 0,pageNo:1,pageSize:99}
      let Parameter2 = {selectIndex : 1,pageNo:1,pageSize:99}
      this.$store.dispatch('get_manuscript',Parameter1)
      this.$store.dispatch('get_manuscript',Parameter2)
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .art_list_bg {
    width: 10rem;
    height: 17.786667rem;
    background: rgba(255, 255, 255, 1);
  }

  .SelectBtn {
    margin-top: .7rem;
    /* position:fixed; */
  }

  .UserInfo {
    /* position:fixed; */
  }

  .Art_contents {
    margin-top: .38rem;
    /* overflow: auto; */
  }
</style>
