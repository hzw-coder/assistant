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
                <div @click="showCustomer = true" class="right">
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
      <!-- 复制到楼盘弹窗 -->
      <van-dialog v-model="showDialog" :show-confirm-button="false">
        <div class="copy">
          <div class="copypro">
            <div class="name">A项目</div>
            <div class="imgcon">
              <img src="../../assets/images/img@2x.png" alt="" />
            </div>
          </div>
          <div class="copyright">
            <div class="text">复制</div>
            <img src="../../assets/images/右箭头@2x.png" alt="" />
          </div>
          <div class="copypro">
            <div class="name">B项目</div>
            <div class="imgcon">
              <img src="../../assets/images/img@2x.png" alt="" />
            </div>
          </div>
        </div>
        <div class="shuoming">
          <div class="wen">
            此功能会把当前项目选定的客户复制并录入到目标项目的意向客户列表中，复制后目标项目中
            客户推介来源统一为“企业微信”。
          </div>
          <div class="wen">
            适用于跟进客户时，发现对其他楼盘有意向，进行一键快速报备。
          </div>
          <div class="tishi">
            <van-checkbox v-model="checked" shape="square"
              >不再提示</van-checkbox
            >
          </div>
          <div class="btn">
            <div @click="showDialog = false" class="cancel">取消</div>
            <div class="continue">继续复制</div>
          </div>
        </div>
      </van-dialog>

      <!-- 客户详情 -->
      <van-action-sheet
        v-model="showCustomer"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
      />
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
      showDialog: true,
      // 不再提示
      checked: true,
      // 客户详情
      showCustomer: false,
      actions: [
        { name: "修改资料" },
        { name: "检测手机号" },
        { name: "标记为失败" },
        { name: "复制客户其他楼盘" },
        { name: "新增跟进日志" },
      ],
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
  // 复制楼盘弹窗
  /deep/.van-dialog {
    box-sizing: border-box;
    padding: 0.65rem 0.45rem;
    width: 6.4rem;
    .copy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.4rem;
      .copypro {
        .name {
          margin-bottom: 0.1rem;
          font-size: 0.3rem;
        }
        .imgcon {
          width: 2.2rem;
          height: 3.1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .copyright {
        .text {
          font-size: 0.3rem;
          text-align: center;
          color: #4d4d4d;
        }
        img {
          width: 0.64rem;
          height: 0.27rem;
        }
      }
    }
    .shuoming {
      .wen {
        color: #454545;
        font-size: 0.28rem;
      }
      .tishi {
        margin: 0.3rem 0;
        text-align: right;
        width: 100%;
        .van-checkbox {
          justify-content: flex-end;
          .van-checkbox__icon {
            font-size: 0.28rem;
          }
          .van-checkbox__label {
            font-size: 0.28rem;
            color: #959595;
          }
        }
      }
    }
    .btn {
      display: flex;
      div {
        text-align: center;
        flex: 50%;
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 0.1rem;
        font-size: 0.3rem;
      }
      .cancel {
        border: 0.01rem solid #4477bc;
        background-color: #fff;
        color: #4477bc;
        margin-right: 0.2rem;
      }
      .continue {
        color: #fff;
        background-color: #4477bc;
      }
    }
  }

  // 客户详情
  /deep/.van-action-sheet__content {
    .van-action-sheet__item {
      border-bottom: 0.01rem solid #edecec;
      .van-action-sheet__name {
        font-size: 0.3rem;
      }
    }
  }
  /deep/.van-action-sheet__cancel {
    font-size: 0.3rem;
    color: #000;
  }
}
</style>
