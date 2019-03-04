<template>
  <div class='art_list_bg no-bar'>
    <!-- userInfo -->
    <UserInfo class="UserInfo" />
    <!-- selectBtn -->
    <SelectBtn class="SelectBtn" />
    <!-- Art_contents -->
    <Art_contents class="Art_contents" />
  </div>
</template>

<script>
  import Art_contents from '../components/Art_contents'
  import SelectBtn from '../components/SelectBtn'
  import UserInfo from '../components/UserInfo'

  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'Article_list',
    components: {
      Art_contents,
      SelectBtn,
      UserInfo
    },
    mounted() {
      this.getslogo();
      setTimeout(() => {
        this.getuser_details();
      }, 1000);
      // this.req_simulated_logo();
    },
    methods: {
      ...mapActions(['getuser_details','getslogo'])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .art_list_bg {
    width: 23.4375rem;
    height: 41.6875rem;
    background: rgba(255, 255, 255, 1);
  }

  .SelectBtn {
    margin-top: 1.875rem;
    /* position:fixed; */
  }

  .UserInfo {
    /* position:fixed; */
  }

  .Art_contents {
    margin-top: 1rem;
    overflow: auto;
  }
</style>
