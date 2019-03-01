<template>
  <section class='art_list_bg'>
    <!-- userInfo -->
    <UserInfo class="UserInfo"/>
    <!-- selectBtn -->
    <SelectBtn class="SelectBtn"/>
    <!-- Art_contents -->
    <Art_contents class="Art_contents"/>
  </section>

</template>

<script>
import Art_contents from '../components/Art_contents'
import SelectBtn from '../components/SelectBtn'
import UserInfo from '../components/UserInfo'

export default {
  name: 'Article_list',
  components: {
    Art_contents,
    SelectBtn,
    UserInfo
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.art_list_bg{
  width: 23.4375rem;
  height:41.6875rem;
  background:rgba(255,255,255,1);
}

.SelectBtn{
  margin-top: 1.875rem;
}

</style>
