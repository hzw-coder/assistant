<template>
  <div id="trajectory">
    <div class="container">
      <div class="top">
        <HeaderTop title="碧桂园凤凰云"></HeaderTop>
        <div class="card">
          <div class="info">
            <div class="avatar">
              <img src="../../assets/images/凤凰云客户访问提醒@2x.png" alt="" />
            </div>
            <div class="detail">
              <div class="name">何润伟</div>
              <div class="userInfo">
                <div class="left">
                  <div class="number">
                    <span class="label">电话号码</span>
                    <span>17621970140</span>
                  </div>
                  <div class="address">
                    <span class="label">地理位置</span>
                    <span>暂无</span>
                  </div>
                </div>
                <div class="right">
                  <span>客户信息</span>
                  <img src="../../assets/images/进入-右-灰@2x.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="towbtn">
            <div class="userAvatar">用户画像</div>
            <div class="saveSys">保存到售楼系统</div>
          </div>
        </div>
      </div>
      <div class="back">
        <van-tabs v-model="activeName">
          <van-tab title="访客" name="a">
            <div class="con">
              <div class="item">
                <div class="content">
                  <div class="sanjiao"></div>
                  <div class="content_top">
                    <div class="title">来源</div>
                    <div class="from">合伙人</div>
                  </div>
                  <div class="see">查看你分享的活动</div>
                  <div class="people">
                    <div class="personal">
                      <img
                        class="ava"
                        src="../../assets/images/分配客户@2x.png"
                        alt=""
                      />
                      <img
                        class="jiantou"
                        src="../../assets/images/箭头@2x.png"
                        alt=""
                      />
                    </div>
                    <div class="personal">
                      <img
                        class="ava"
                        src="../../assets/images/分配客户@2x.png"
                        alt=""
                      />
                      <img
                        class="jiantou"
                        src="../../assets/images/箭头@2x.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="circle"></div>
                <div class="line"></div>
                <p class="time">2019-09-23 09:12</p>
              </div>
              <div class="item">
                <div class="content">
                  <div class="sanjiao"></div>
                  <div class="content_top">
                    <div class="title">来源</div>
                    <div class="from">物料</div>
                  </div>
                  <div class="see">查看了电子物料</div>
                  <div class="people">
                    <div class="personal">
                      <img
                        class="ava"
                        src="../../assets/images/分配客户@2x.png"
                        alt=""
                      />
                      <img
                        class="jiantou"
                        src="../../assets/images/箭头@2x.png"
                        alt=""
                      />
                    </div>
                    <div class="personal">
                      <img
                        class="ava"
                        src="../../assets/images/分配客户@2x.png"
                        alt=""
                      />
                      <img
                        class="jiantou"
                        src="../../assets/images/箭头@2x.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="circle"></div>
                <div class="line"></div>
                <p class="time">2019-09-23 09:12</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="客户分析" name="b">客户分析内容</van-tab>
        </van-tabs>
      </div>
      <div class="call">
        <div class="phone">
          <img src="../../assets/images/电 话-灰@2x.png" alt="" />
          <span>拨打电话</span>
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
  name: "trajectory",
  components: {
    HeaderTop,
  },
  data() {
    return {
      activeName: "a",
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#trajectory {
  height: 100%;
  .container {
    height: 100%;
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
      height: 3rem;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      position: relative;
      .card {
        position: absolute;
        height: 3.6rem;
        z-index: 3;
        width: calc(100vw - 0.8rem);
        background-color: #fff;
        left: 0.4rem;
        top: 1rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.3rem 0.003rem gray;
        padding: 0 0.2rem;
        .info {
          display: flex;
          margin-top: 0.3rem;
          .avatar {
            margin-right: 0.2rem;
            img {
              width: 1rem;
              height: 1rem;
              border-radius: 50%;
            }
          }
          .detail {
            width: 100%;
            .name {
              font-weight: 700;
              font-size: 0.35rem;
              height: 0.8rem;
              line-height: 0.8rem;
            }
            .userInfo {
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: #8f8f8f;
              font-size: 0.25rem;
              .left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .number {
                  margin-bottom: 0.2rem;
                }
                .address {
                  span:nth-of-type(2) {
                    font-weight: 700;
                    color: #546170;
                  }
                }
                .label {
                  margin-right: 0.1rem;
                  font-weight: 700;
                }
              }
              .right {
                span {
                  font-size: 0.3rem;
                  font-weight: 700;
                  vertical-align: middle;
                }
                img {
                  width: 0.24rem;
                  height: 0.24rem;
                }
              }
            }
          }
        }
        .towbtn {
          display: flex;
          margin-top: 0.4rem;
          div {
            height: 0.7rem;
            background-color: #4477bc;
            color: #fff;
            line-height: 0.7rem;
            text-align: center;
            border-radius: 0.7rem;
            font-size: 0.3rem;
          }
          .userAvatar {
            flex: 50%;
            margin-right: 0.4rem;
          }
          .saveSys {
            flex: 50%;
          }
        }
      }
    }
    .back {
      background-color: #fff;
      position: relative;
      margin-top: 2rem;
      /deep/ .van-tabs {
        .van-tab.van-tab--active {
          color: #4477bc;
          font-weight: 700;
          font-size: 0.3rem;
        }
        .van-tabs__wrap {
          height: 0.6rem;
        }
        .van-tab {
          color: #000;
          height: 100%;
          font-size: 0.3rem;
          line-height: 0.4rem;
        }
        .van-tabs__line {
          background-color: #4477bc;
          width: 0.3rem;
        }
        // 内容
        .van-tabs__content {
          border-top: 0.01rem solid #e8e8ec;
          margin-top: 0.1rem;
          padding: 0 0.25rem;
        }
      }
      .con {
        width: 100%;
        padding-top: 0.2rem;
        .item {
          position: relative;
          width: 100%;
          height: 2.4rem;
          .content {
            position: absolute;
            right: 0;
            top: 0;
            box-sizing: border-box;
            padding: 0.2rem;
            border-radius: 0.25rem;
            border-top-left-radius: 0;
            width: calc(60% - 0.5rem);
            background-color: #f5f6fa;
            height: calc(100% - 0.3rem);
            .content_top {
              display: flex;
              font-size: 0.3rem;
              align-items: center;
              .title {
                margin-right: 0.3rem;
                font-weight: 700;
              }
              .from {
                width: 0.9rem;
                height: 0.35rem;
                line-height: 0.35rem;
                font-size: 0.25rem;
                text-align: center;
                background-color: #eaedf6;
                border-radius: 0.35rem;
                color: #4477bc;
              }
            }
            .see {
              margin-top: 0.2rem;
              font-size: 0.25rem;
              color: #54616f;
              font-weight: 700;
            }
            .people {
              display: flex;
              margin-top: 0.25rem;
              .personal {
                .ava {
                  width: 0.4rem;
                  height: 0.4rem;
                  border-radius: 50%;
                }
                .jiantou {
                  width: 0.32rem;
                  height: 0.32rem;
                  margin: 0 0.1rem;
                }
              }
            }
            // 三角
            .sanjiao {
              position: absolute;
              top: 0;
              left: -0.25rem;
              width: 0;
              height: 0;
              border-top: 0.25rem solid #f5f6fa;
              border-left: 0.25rem solid transparent;
            }
          }
          .time {
            color: #586573;
            width: 50%;
            font-size: 0.3rem;
          }
          // 中间线
          .line {
            position: absolute;
            width: 0.01rem;
            border-right: 0.01rem solid #4477bc;
            height: 100%;
            left: 40%;
            top: 0.2rem;
            transform: translateX(-50%);
          }
          .circle {
            position: absolute;
            width: 0.2rem;
            border-radius: 50%;
            border: 0.03rem solid #4477bc;
            height: 0.2rem;
            left: 40%;
            background-color: #fff;
            top: 0;
            transform: translateX(-50%);
          }
        }
        // 最后的圆
        .item:nth-last-of-type(1)::after {
          display: block;
          content: "";
          width: 0.2rem;
          border-radius: 50%;
          position: absolute;
          border: 0.03rem solid #4477bc;
          height: 0.2rem;
          left: 40%;
          transform: translateX(-50%);
          bottom: -0.2rem;
          background-color: #fff;
        }
      }
    }
    // 拨打电话
    .call {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1rem;
      z-index: 3;
      background-color: #4477bc;
      .phone {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 1rem;
        color: #fff;
        img {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.1rem;
        }
        span {
          font-size: 0.3rem;
        }
      }
    }
  }
  .container::after {
    content: "";
    display: block;
    width: 100%;
    height: 1.2rem;
  }
}
</style>
