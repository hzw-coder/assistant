<template>
  <div id="selectpotential">
    <div class="container">
      <div class="top">
        <HeaderTop title="选择潜在客户"></HeaderTop>
      </div>
      <!-- 搜索框 -->
      <div class="searchInput">
        <van-search v-model="searchName" placeholder="请输入客户名搜索" />
      </div>
      <!-- 搜索列表 -->
      <div class="searchList">
        <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
        >
          <div class="listItem">
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
            <div class="itemDetail">
              <div class="itemName">陈春</div>
              <div class="addtime">添加时间 2020-11-21</div>
            </div>
          </div>
          <div class="listItem">
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
            <div class="itemDetail">
              <div class="itemName">陈春</div>
              <div class="addtime">添加时间 2020-11-21</div>
            </div>
          </div>
          <div class="listItem">
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
            <div class="itemDetail">
              <div class="itemName">陈春</div>
              <div class="addtime">添加时间 2020-11-21</div>
            </div>
          </div>
          <div class="listItem">
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
            <div class="itemDetail">
              <div class="itemName">陈春</div>
              <div class="addtime">添加时间 2020-11-21</div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
const HeaderTop = () =>
  import(
    /* webpackChunkName: "HeaderTop" */ "../../components/Header/HeaderTop.vue"
  );
export default {
  name: "selectpotential",
  data() {
    return {
      searchName: "",
      loading: false,
      finished: false,
    };
  },
  methods: {},
  components: {
    HeaderTop,
  },
};
</script>
<style lang="scss" scoped>
#selectpotential {
  height: 100%;
  .container {
    background-color: #fff;
    height: 100%;
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
    }
    //搜索框
    .searchInput {
      padding: 0.3rem 0.25rem;
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
      padding: 0 0.25rem;
      .listItem {
        height: 1.2rem;
        width: 100%;
        border-bottom: 0.01rem solid #ebebeb;
        display: flex;
        align-items: center;
        .itemImg {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          margin-right: 0.3rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .itemDetail {
          width: calc(100vw - 1.6rem);
          display: flex;
          justify-content: space-between;
          align-items: center;
          .itemName {
            font-weight: 700;
            font-size: 0.35rem;
          }
          .addtime {
            font-size: 00.25rem;
            color: #959595;
          }
        }
      }
    }
  }
}
</style>