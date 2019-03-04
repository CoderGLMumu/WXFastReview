<template>
  <div class="nav">
    <!-- SelectBtn -->
    <div class="leftB">待审核
      <mt-badge type="error" color="#6665FF">10</mt-badge>
    </div>

    <div class="leftR">已审核</div>
  </div>
</template>

<script>
import { Badge } from "mint-ui";

export default {
  name: "SelectBtn",

  components: {
    // Badge.name,
    Badge
  }
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
.leftB {
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
  height: 1.5625rem;
  font-size: 18px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  /* vertical-align: right; */
}
</style>
