<template>
  <div id="home">
    <div class="container">
      <div class="top">
        <HeaderTop></HeaderTop>
        <div class="address">
          <span>碧桂园容桂凤凰湾</span>
          <img src="../assets/images/右-进入@2x.png" alt="" />
        </div>
        <div class="date">
          <div class="time">
            <span>2020-11-11</span>
            <img src="../assets/images/下拉-透明@2x.png" alt="" />
          </div>
          <div class="tips">*数据每10分钟更新</div>
        </div>
      </div>
      <div class="back">
        <div class="options_container">
          <div class="customer">
            <div class="customer_type">
              <div class="type_item">
                <div class="title">客户总数</div>
                <div class="num">200</div>
              </div>
              <div class="type_item">
                <div class="title">新增意向客户</div>
                <div class="num">10</div>
              </div>
              <div class="type_item">
                <div class="title">新增凤凰云访客</div>
                <div class="num">200</div>
              </div>
              <div class="type_item">
                <div class="title">新增企微未绑定的客户</div>
                <div class="num">200</div>
              </div>
            </div>
            <div class="add_btn">
              <img src="../assets/images/添加-蓝-大@2x.png" alt="" />
              <span>添加客户</span>
            </div>
          </div>
          <div class="rank">本月团队排行</div>
          <div class="tool">
            <div class="title">工具箱</div>
            <div class="tool_container">
              <div class="item">
                <img src="../assets/images/添加客户@2x.png" alt="" />
                <span>添加客户</span>
              </div>
              <div class="item">
                <img src="../assets/images/客户列表@2x.png" alt="" />
                <span>客户列表</span>
              </div>
              <div class="item">
                <img src="../assets/images/转跟办人@2x.png" alt="" />
                <span>转跟办人</span>
              </div>
              <div class="item">
                <img src="../assets/images/分配客户@2x.png" alt="" />
                <span>分配客户</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  height: 100%;
  .container {
    height: 100%;
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
      height: 3rem;
      .address {
        display: flex;
        justify-content: space-between;
        height: 0.6rem;
        align-items: center;
        font-size: 0.4rem;
        color: #fff;
        img {
          width: 0.36rem;
          flex-shrink: 0;
          height: 0.36rem;
        }
      }
      .date {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        height: 0.6rem;
        .time {
          font-size: 0.28rem;
          display: flex;
          img {
            margin-left: 0.05rem;
            width: 0.32rem;
            height: 0.32rem;
            align-self: center;
          }
        }
        .tips {
          color: #c2d2e9;
        }
      }
    }
    .back {
      background-color: #f5f5f5;
      padding: 0 0.25rem;
      height: calc(100vh - 3rem);
      position: relative;
      .options_container {
        position: absolute;
        border-radius: 0.2rem;
        top: -0.8rem;
        background-color: #f5f5f5;
        .customer,
        .rank,
        .tool {
          background-color: #fff;
          border-radius: 0.2rem;
          width: calc(100vw - 0.5rem);
          padding: 0.3rem;
        }
        .customer {
          .customer_type {
            display: flex;
            flex-wrap: wrap;
            .type_item {
              flex: 50%;
              border-right: 1px solid #edecec;
              border-bottom: 1px solid #edecec;
              padding-left: 0.25rem;
              .title {
                font-size: 0.25rem;
              }
              .num {
                font-weight: 700;
                font-size: 0.4rem;
                margin: 0.25rem 0;
              }
            }
            .type_item:nth-of-type(even) {
              border-right: none;
            }
            .type_item:nth-last-of-type(1),
            .type_item:nth-last-of-type(2) {
              border-bottom: none;
              padding-top: 0.4rem;
              .num {
                margin-bottom: 0;
              }
            }
          }
          .add_btn {
            margin-top: 0.3rem;
            background-color: #eff3f9;
            height: 0.9rem;
            border-radius: 0.2rem;
            color: #3f73ba;
            text-align: center;
            display: flex;
            font-size: 0.28rem;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            img {
              width: 0.24rem;
              height: 0.24rem;
              margin-right: 0.15rem;
            }
          }
        }
        .rank {
          margin: 0.15rem 0;
        }
        .tool {
          padding: 0.3rem 0;
          .title {
            font-weight: bold;
            font-size: 0.3rem;
            padding-left: 0.3rem;
          }
          .tool_container {
            display: flex;
            justify-content: space-around;
            margin-top: 0.2rem;
            .item {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              img {
                width: 0.8rem;
                height: 0.8rem;
              }
              span {
                margin-top: 0.2rem;
                font-size: 0.28rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
