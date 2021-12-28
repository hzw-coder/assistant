<template>
  <div id="headertop">
    <div class="container">
      <div class="header_img">
        <img class="header_img" src="../../assets/images/关 闭@2x.png" alt="" />
      </div>
      <span class="header_title">客户小助手</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "headertop",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#headertop {
  .container {
    position: relative;
    text-align: center;
    background-color: #4477bc;
    color: #fff;
    height: 0.8rem;
    line-height: 0.8rem;
    .header_img {
      position: absolute;
      display: inline-block;
      left: 0;
      height: 0.32rem;
      width: 0.32rem;
    }
    .header_title {
      font-size: 0.3rem;
    }
  }
}
</style>