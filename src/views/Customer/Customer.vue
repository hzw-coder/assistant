<template>
  <div id="customer">
    <div class="comtainer">
      <div class="top">
        <HeaderTop title="我的客户"></HeaderTop>
      </div>
      <div class="search">
        <div class="address">
          <span>碧桂园容桂凤凰湾</span>
          <img src="../../assets/images/下@2x.png" alt="" />
        </div>
        <div class="searchinput">
          <div class="searchcontainer">
            <div class="left">
              <span>姓名</span>
              <img src="../../assets/images/下-小@2x.png" alt="" />
            </div>
            <div class="right">
              <img src="../../assets/images/搜索@2x.png" alt="" />
              请输入关键字
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const HeaderTop = () =>
  import(
    /* webpackChunkName: "headertop" */ "../../components/Header/HeaderTop"
  );
export default {
  name: "customer",
  data() {
    return {};
  },
  components: {
    HeaderTop,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
#customer {
  .comtainer {
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
    }
    .search {
      padding: 0 0.25rem;
      margin: 0.2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .address {
        flex: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.3rem;
          font-weight: 600;
        }
        img {
          margin-left: 0.1rem;
          width: 0.24rem;
          height: 0.24rem;
        }
      }
      .searchinput {
        flex: 60%;
        padding-left: 0.3rem;
        .searchcontainer {
          background-color: #f2f2f2;
          padding: 0.1rem 0.15rem;
          border-radius: 0.1rem;
          height: 0.65rem;
          display: flex;
          align-items: center;
          .left {
            flex: 2;
            display: flex;
            padding: 0 0.15rem;
            border-right: 0.01rem solid #dedede;
            justify-content: space-between;
            align-items: center;
            span {
              font-weight: 500;
              font-size: 0.25rem;
            }
            img {
              width: 0.25rem;
              height: 0.25rem;
            }
          }
          .right {
            flex: 4;
            align-items: center;
            display: flex;
            margin-left: 0.2rem;
            font-size: 0.2rem;
            color: #989898;
            img {
              width: 0.25rem;
              height: 0.25rem;
              margin-right: 0.1rem;
            }
          }
        }
      }
    }
  }
}
</style>