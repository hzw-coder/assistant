<template>
  <div id="transfer">
    <div class="container">
      <div class="top">
        <HeaderTop title="转跟办人"></HeaderTop>
      </div>
      <div v-if="isAuthorization" class="toast">该用户还没授权手机号</div>
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
              <!-- <input type="text" placeholder="请输入关键字" /> -->
              <van-field v-model="word" clearable placeholder="请输入关键词" />
            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <van-tabs v-model="indexActive">
          <van-tab title="潜在客户">
            <Potential></Potential>
          </van-tab>
          <van-tab title="公共客户">
            <Public></Public>
          </van-tab>
          <van-tab title="意向客户">
            <Intention></Intention>
          </van-tab>
          <van-tab title="成交客户">
            <Deal></Deal>
          </van-tab>
        </van-tabs>
      </div>
      <!-- 底部转跟办人 -->
      <div class="bottom">
        <div class="bottomcontainer">转跟办人</div>
      </div>
      <!-- 选择跟办人 -->
      <van-popup
        v-model="showTransferPopup"
        round
        position="bottom"
        :style="{ height: '60%' }"
        class="popupclass"
      >
        <!-- 标题区域 -->
        <div class="titlediv">
          <!-- 标题 -->
          <div class="title">选择跟办人</div>
          <img src="../../assets/images/小图标_关闭@2x.png" alt="" />
        </div>
        <!-- 搜索框 -->
        <div class="searchInput">
          <van-search v-model="searchKey" placeholder="请输入关键字" />
        </div>
        <!-- 搜索列表 -->
        <div class="searchList">
          <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
          >
            <div class="searchItem">
              <div class="name">
                <div class="option">选项一</div>
                <div class="isQuit">已离职</div>
              </div>
              <img src="../../assets/images/check@2x.png" alt="" />
            </div>
            <div class="searchItem">
              <div class="name">
                <div class="option">选项二</div>
                <div v-show="false" class="isQuit">已离职</div>
              </div>
              <img
                v-show="false"
                src="../../assets/images/check@2x.png"
                alt=""
              />
            </div>
            <div class="searchItem">
              <div class="name">
                <div class="option">选项三</div>
                <div v-show="false" class="isQuit">已离职</div>
              </div>
              <img
                v-show="false"
                src="../../assets/images/check@2x.png"
                alt=""
              />
            </div>
            <div class="searchItem">
              <div class="name">
                <div class="option">选项四</div>
                <div v-show="false" class="isQuit">已离职</div>
              </div>
              <img
                v-show="false"
                src="../../assets/images/check@2x.png"
                alt=""
              />
            </div>
          </van-list>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
const Deal = () => import(/* webpackChunkName: "Deal" */ "../Deal/Deal");
const Intention = () =>
  import(/* webpackChunkName: "Intention" */ "../Intention/Intention");
const Potential = () =>
  import(/* webpackChunkName: "Potential" */ "../Potential/Potential");
const Public = () =>
  import(/* webpackChunkName: "Public" */ "../Public/Public");
const HeaderTop = () =>
  import(
    /* webpackChunkName: "headertop" */ "../../components/Header/HeaderTop"
  );
export default {
  name: "transfer",
  data() {
    return {
      indexActive: 0,
      word: "",
      isAuthorization: false, //是否授权手机号
      // 选择跟办人
      showTransferPopup: true,
      // 搜索关键字
      searchKey: "",
      loading: false,
      finished: false,
    };
  },
  components: {
    HeaderTop,
    Deal,
    Intention,
    Potential,
    Public,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
#transfer {
  .container {
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
    }
    // toast是否授权
    .toast {
      background-color: #eff3f9;
      padding: 0 0.25rem;
      font-size: 0.25rem;
      height: 0.9rem;
      line-height: 0.9rem;
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
          color: #535353;
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
            flex: 5;
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
            /deep/.van-cell {
              padding: 0;
              background-color: #f2f2f2;
              font-size: 0.2rem;
            }
          }
        }
      }
    }
    .menu {
      /deep/.van-tabs__wrap {
        height: 0.88rem;
      }
      /deep/.van-tab {
        .van-tab__text {
          font-size: 0.34rem;
          display: block;
          height: 0.4rem;
          line-height: 0.4rem;
        }
      }
      /deep/.van-tab--active {
        font-weight: 550;
      }
      /deep/.van-tabs__line {
        background-color: #4477bc;
        width: 0.45rem;
        height: 0.06rem;
      }
    }
    // 底部转跟办人
    .bottom {
      width: 100%;
      height: 0.95rem;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #4477bc;
      .bottomcontainer {
        height: 100%;
        width: 100%;
        line-height: 0.95rem;
        text-align: center;
        color: #fff;
        font-size: 0.3rem;
        font-weight: 700;
      }
    }
    .popupclass {
      padding: 0.2rem;
      .titlediv {
        display: flex;
        align-items: center;
        height: 1rem;
        // border: 1px solid red;
        font-size: 0.35rem;
        font-weight: 700;
        .title {
          flex: 90%;
          text-align: center;
        }
        img {
          width: 0.25rem;
          height: 0.25rem;
        }
      }
      //搜索框
      .searchInput {
        /deep/ .van-search {
          padding: 0;
          .van-search__content {
            background-color: #f2f2f2;
            border-radius: 0.1rem;
            .van-cell {
              color: #a8a8a8;
              font-size: 0.3rem;
              display: flex;
              align-items: center;
              // 搜索图标
              .van-field__left-icon {
                margin-right: 0.08rem;
                .van-icon-search:before {
                  font-size: 0.3rem;
                }
              }
            }
          }
        }
      }
      // 搜索列表
      .searchList {
        .searchItem {
          width: 100%;
          display: flex;
          align-items: center;
          height: 1.3rem;
          justify-content: space-between;
          .name {
            display: flex;
            align-items: center;
            .option {
              width: 1rem;
              height: 100%;
              line-height: 1.3rem;
              font-size: 0.3rem;
              margin-right: 0.2rem;
            }
            .isQuit {
              font-size: 0.25rem;
              border: 0.01rem solid #929292;
              color: #929292;
              padding: 0.05rem 0.15rem;
              border-radius: 0.1rem;
            }
          }
          img {
            width: 0.32rem;
            height: 0.32rem;
          }
        }
      }
    }
  }
  .container::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.95rem;
  }
}
</style>