<template>

  <div>
    <!-- SelectBtn -->
    <span class='leftB'>待审核
      <mt-badge type="error" color='red'>10</mt-badge>
    </span>

    <span class='leftR'>已审核</span>

  </div>

</template>

<script>

import { Badge } from 'mint-ui';

// Vue.component(Badge.name, Badge);


export default {
  name: 'SelectBtn',

  components: {
    // Badge.name,
    Badge,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  position: flex;
}
.leftB{
  width: 50%;
  display: inline-block;
  text-align: center;
  /* vertical-align:top; */
  position: relative;
}
.leftR{
  width: 48%;
  display: inline-block;
  text-align: center;
  /* vertical-align: right; */
  position: relative;
}

</style>
