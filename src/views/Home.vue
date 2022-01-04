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
                <div class="than">
                  <span>较昨日</span>
                  <img src="../assets/images/上升@2x.png" alt="" />
                  <span>4</span>
                </div>
              </div>
              <div class="type_item">
                <div class="title">新增凤凰云访客</div>
                <div class="num">200</div>
                <div class="than rise">
                  <span>较昨日</span>
                  <img src="../assets/images/上升@2x.png" alt="" />
                  <span>8</span>
                </div>
              </div>
              <div class="type_item">
                <div class="title">新增企微未绑定的客户</div>
                <div class="num">200</div>
                <div class="than dec">
                  <span>较昨日</span>
                  <img src="../assets/images/下降@2x.png" alt="" />
                  <span>12</span>
                </div>
              </div>
            </div>
            <div class="add_btn">
              <img src="../assets/images/添加-蓝-大@2x.png" alt="" />
              <span>添加客户</span>
            </div>
          </div>
          <!-- 排行 -->
          <div class="rank">
            <div class="titleContainer">
              <div class="title">本月团队排行</div>
              <div class="currentrank">当前排名第10名</div>
            </div>
            <div class="wrapper" ref="wrapper">
              <ul class="content" ref="content">
                <li class="rankItem">
                  <div class="avatar_con">
                    <img
                      class="avatar"
                      src="../assets/images/凤凰云客户访问提醒@2x.png"
                      alt=""
                    />
                    <img
                      class="rankdetail"
                      src="../assets/images/冠军@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="username">林走凡</div>
                  <div class="honnor">获客29个</div>
                </li>
                <li class="rankItem">
                  <div class="avatar_con">
                    <img
                      class="avatar"
                      src="../assets/images/凤凰云客户访问提醒@2x.png"
                      alt=""
                    />
                    <img
                      class="rankdetail"
                      src="../assets/images/亚军@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="username">林走凡</div>
                  <div class="honnor">获客29个</div>
                </li>
                <li class="rankItem">
                  <div class="avatar_con">
                    <img
                      class="avatar"
                      src="../assets/images/凤凰云客户访问提醒@2x.png"
                      alt=""
                    />
                    <img
                      class="rankdetail"
                      src="../assets/images/季军@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="username">林走凡</div>
                  <div class="honnor">获客29个</div>
                </li>
                <li class="rankItem">
                  <div class="avatar_con">
                    <img
                      class="avatar"
                      src="../assets/images/凤凰云客户访问提醒@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="username">林走凡</div>
                  <div class="honnor">获客29个</div>
                </li>
                <li class="rankItem">
                  <div class="avatar_con">
                    <img
                      class="avatar"
                      src="../assets/images/凤凰云客户访问提醒@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="username">林走凡</div>
                  <div class="honnor">获客29个</div>
                </li>
                <li class="rankItem">
                  <div class="avatar_con">
                    <img
                      class="avatar"
                      src="../assets/images/凤凰云客户访问提醒@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="username">林走凡</div>
                  <div class="honnor">获客29个</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 工具箱 -->
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
import BScroll from "better-scroll";
export default {
  name: "Home",
  components: {
    HeaderTop,
  },
  methods: {
    initScroll() {
      let width = 6 * (1.7 + 0.25);
      this.$refs.content.style.width = width + "rem";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
          this.initScroll();
        }
      }, 0);
    });
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
                display: inline-block;
              }
              .than {
                display: inline-block;
                margin-left: 0.1rem;

                vertical-align: baseline;
                img {
                  height: 0.32rem;
                  width: 0.32rem;
                  margin-left: 0.15rem;
                }
              }
              .rise {
                color: #45d315;
              }
              .dec {
                color: #ff4529;
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
          .titleContainer {
            display: flex;
            justify-content: space-between;
            .title {
              font-weight: 700;
              font-size: 0.3rem;
            }
            .currentrank {
              font-size: 0.2rem;
              color: #2d66b3;
            }
          }
          .wrapper {
            margin-top: 0.15rem;
            white-space: nowrap;
            overflow: hidden;
            .content {
              text-align: center;
              .rankItem {
                width: 1.7rem;
                display: inline-block;
                margin-right: 0.25rem;
                // height: 2.3rem;
                padding: 0.2rem 0.3rem;
                background-color: #f7f8f9;
                border-radius: 0.15rem;
                .avatar_con {
                  width: 0.8rem;
                  height: 0.8rem;
                  border-radius: 50%;
                  margin: 0 auto;
                  position: relative;
                  .avatar {
                    width: 100%;
                    height: 100%;
                  }
                  .rankdetail {
                    position: absolute;
                    width: 0.35rem;
                    height: 0.32rem;
                    top: -0.16rem;
                    left: 0;
                  }
                }
                .username {
                  margin: 0.1rem 0;
                  font-weight: 600;
                }
                .honnor {
                  color: #989797;
                }
              }
            }
          }
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
