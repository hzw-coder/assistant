<template>
  <div id="potential">
    <!-- 排序筛选 -->
    <div class="sort">
      <div class="left">
        <div class="time">
          <span>访问时间</span>
          <img src="../../assets/images/排序@2x.png" alt="" />
        </div>
        <div class="count">
          <span>访问次数</span>
          <img src="../../assets/images/排序@2x.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="choose">
          <span>筛选</span>
          <img src="../../assets/images/筛选@2x.png" alt="" />
        </div>
      </div>
    </div>
    <!-- tips -->
    <div class="tips">
      <div class="tips_top">
        <div class="title">
          <img src="../../assets/images/灯泡@2x.png" alt="" />
          <span>小贴士</span>
        </div>
        <div class="notips">不再提示</div>
      </div>
      <div class="content">
        "潜在客户"这里将显示你通过“碧桂园凤凰云”小程序或企业微信等渠道获取且未保存客储的访客，在这里你可以
      </div>
      <div class="itemList">
        <div class="item">1、查看所有潜在客户的详细资料</div>
        <div class="item">
          2、将潜在客户一键保存到售楼系统，保护自己的客户资源
        </div>
        <div class="item">
          3、一键保存到售楼系统后，该客户将会在意向/成交列表显示
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "potential",

  data() {
    return {};
  },

  mounted() {
    console.log("潜在客户");
  },
  activated() {
    console.log("潜在activated");
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
#potential {
  .sort {
    padding: 0 0.25rem;
    height: 0.75rem;
    line-height: 0.75rem;
    background-color: #f5f5f5;
    display: flex;
    color: #484848;
    font-size: 0.3rem;
    justify-content: space-between;
    img {
      width: 0.24rem;
      height: 0.24rem;
      margin-left: 0.05rem;
    }
    .left {
      flex: 50%;
      display: flex;
      justify-content: space-between;
      .time {
        display: flex;
        align-items: center;
      }
      .count {
        display: flex;
        align-items: center;
      }
    }
    .right {
      flex: 50%;
      text-align: right;
    }
  }
  .tips {
    padding: 0.2rem 0.25rem;
    background-color: #eff3f9;
    font-size: 0.3rem;
    color: #5d5d5d;
    .tips_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.1rem;
      .title {
        color: #4376bb;
        display: flex;
        align-items: center;
        img {
          width: 0.3rem;
          height: 0.3rem;
        }
        span {
          margin-left: 0.15rem;
          font-weight: 700;
        }
      }
      .notips {
        border: 0.01rem solid #a5a5a5;
        padding: 0.1rem 0.2rem;
        color: #a5a5a5;
        border-radius: 0.15rem;
      }
    }
    .content {
      font-size: 0.2rem;
    }
    .itemList {
      font-size: 0.2rem;
    }
  }
}
</style>