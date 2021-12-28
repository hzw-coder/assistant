<template>
  <div id="home">
    <div class="container">
      <div>
        <HeaderTop></HeaderTop>
      </div>
      <div>下</div>
      <div>内容</div>
    </div>
  </div>
</template>

<script>
const HeaderTop = () =>
  import(/* webpackChunkName: "headertop" */ "../components/Header/HeaderTop");
export default {
  name: "Home",
  components: {
    HeaderTop,
  },
};
</script>
<style lang="scss" scoped>
#home {
  .container {
    padding: 0 0.25rem;
    background-color: #4477bc;
  }
}
</style>
