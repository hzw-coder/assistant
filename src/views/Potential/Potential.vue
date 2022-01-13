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
    <!-- 列表 -->
    <div class="listContainer">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="customerItem">
          <div class="itemLeft">
            <!-- 头像 -->
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
          </div>
          <div class="itemRight">
            <div class="itemDetail">
              <div class="info">
                <div class="name">
                  <span>林大大</span>
                  <img src="../../assets/images/男_2@2x.png" alt="" />
                </div>
                <div class="from">来源：凤凰云-文章详情</div>
                <div class="visit">
                  <span class="visit_times">访问2次</span>
                  <span class="lately">最近访问 1天前</span>
                </div>
              </div>
              <div class="isAuthorization">手机号未授权</div>
            </div>
            <div class="itemOpe">
              <div class="phone">
                <img src="../../assets/images/电 话-灰@2x.png" alt="" />
                <span>打电话</span>
              </div>
              <div class="wechat">
                <img src="../../assets/images/企业微信未绑定@2x.png" alt="" />
                <span>企微聊天</span>
              </div>
              <div class="save">保存到售楼系统</div>
            </div>
          </div>
        </div>
        <div class="customerItem">
          <div class="itemLeft">
            <!-- 头像 -->
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
          </div>
          <div class="itemRight">
            <div class="itemDetail">
              <div class="info">
                <div class="name">
                  <span>林大大</span>
                  <img src="../../assets/images/男_2@2x.png" alt="" />
                </div>
                <div class="from">来源：凤凰云-文章详情</div>
                <div class="visit">
                  <span class="visit_times">访问2次</span>
                  <span class="lately">最近访问 1天前</span>
                </div>
              </div>
              <div class="isAuthorization">手机号未授权</div>
            </div>
            <div class="itemOpe">
              <div class="phone">
                <img src="../../assets/images/电 话-灰@2x.png" alt="" />
                <span>打电话</span>
              </div>
              <div class="wechat">
                <img src="../../assets/images/企业微信未绑定@2x.png" alt="" />
                <span>企微聊天</span>
              </div>
              <div class="save">保存到售楼系统</div>
            </div>
          </div>
        </div>
        <div class="customerItem">
          <div class="itemLeft">
            <!-- 头像 -->
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
          </div>
          <div class="itemRight">
            <div class="itemDetail">
              <div class="info">
                <div class="name">
                  <span>林大大</span>
                  <img src="../../assets/images/男_2@2x.png" alt="" />
                </div>
                <div class="from">来源：凤凰云-文章详情</div>
                <div class="visit">
                  <span class="visit_times">访问2次</span>
                  <span class="lately">最近访问 1天前</span>
                </div>
              </div>
              <div class="isAuthorization">手机号未授权</div>
            </div>
            <div class="itemOpe">
              <div class="phone">
                <img src="../../assets/images/电 话-灰@2x.png" alt="" />
                <span>打电话</span>
              </div>
              <div class="wechat">
                <img src="../../assets/images/企业微信未绑定@2x.png" alt="" />
                <span>企微聊天</span>
              </div>
              <div class="save">保存到售楼系统</div>
            </div>
          </div>
        </div>
        <div class="customerItem">
          <div class="itemLeft">
            <!-- 头像 -->
            <div class="itemImg">
              <img src="../../assets/images/客户分配进度提醒@2x.png" alt="" />
            </div>
          </div>
          <div class="itemRight">
            <div class="itemDetail">
              <div class="info">
                <div class="name">
                  <span>林大大</span>
                  <img src="../../assets/images/男_2@2x.png" alt="" />
                </div>
                <div class="from">来源：凤凰云-文章详情</div>
                <div class="visit">
                  <span class="visit_times">访问2次</span>
                  <span class="lately">最近访问 1天前</span>
                </div>
              </div>
              <div class="isAuthorization">手机号未授权</div>
            </div>
            <div class="itemOpe">
              <div class="phone">
                <img src="../../assets/images/电 话-灰@2x.png" alt="" />
                <span>打电话</span>
              </div>
              <div class="wechat">
                <img src="../../assets/images/企业微信未绑定@2x.png" alt="" />
                <span>企微聊天</span>
              </div>
              <div class="save">保存到售楼系统</div>
            </div>
          </div>
        </div>
      </van-list>
    </div>

    <van-popup
      round
      position="bottom"
      :style="{ height: '60%' }"
      v-model="showPopup"
      class="popupclass"
    >
      <div class="popupContainer">
        <div class="option">
          <div class="title">添加时间</div>
          <van-radio-group
            class="isflex"
            v-model="radio"
            direction="horizontal"
          >
            <van-radio name="1">今日</van-radio>
            <van-radio name="2">近7日</van-radio>
            <van-radio name="3">近30日</van-radio>
          </van-radio-group>
        </div>

        <div class="selecttime">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item name="starttime">
              <template #title>
                <div>开始时间</div>
                <div>1994-09-12</div>
              </template>
              内容
            </van-collapse-item>
            <van-collapse-item name="endtime">
              <template #title>
                <div>结束时间</div>
                <div>1995-01-01</div>
              </template>
              内容
            </van-collapse-item>
          </van-collapse>
        </div>

        <div class="option">
          <div class="title">客户来源</div>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">凤凰云访客</van-radio>
            <van-radio name="2">企业微信好友</van-radio>
          </van-radio-group>
        </div>
        <div class="option">
          <div class="title">手机注册状态</div>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">有手机号</van-radio>
            <van-radio name="2">无手机号</van-radio>
          </van-radio-group>
        </div>
        <div class="twobtn">
          <div class="btnContainer">
            <div class="reset">重置</div>
            <div class="complete">完成</div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "potential",

  data() {
    return {
      loading: false,
      finished: false,
      showPopup: true,
      radio: "",
      activeName: "",
    };
  },

  mounted() {
    console.log("潜在客户");
  },
  activated() {
    console.log("潜在activated");
  },
  methods: {
    onLoad() {
      this.loading = false;
      console.log("onLoad");
    },
  },
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
  // 列表
  .listContainer {
    padding: 0 0.25rem;
    .customerItem {
      padding: 0.2rem 0;
      border-bottom: 0.01rem solid #edecec;
      display: flex;
      .itemLeft {
        flex: 20%;
        .itemImg {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .itemRight {
        flex: 80%;
        .itemDetail {
          display: flex;
          justify-content: space-between;
          .info {
            .name {
              display: flex;
              align-items: center;
              span {
                font-weight: 700;
                vertical-align: top;
                font-size: 0.3rem;
              }
              img {
                width: 0.24rem;
                height: 0.24rem;
                margin: 0 0.1rem;
              }
            }
            .from {
              margin: 0.1rem 0;
              font-size: 0.2rem;
            }
            .visit {
              color: #969696;
              font-size: 0.25rem;
              .visit_times {
                margin-right: 0.15rem;
              }
            }
          }
          .isAuthorization {
            color: #969696;
            font-size: 0.25rem;
          }
        }
        .itemOpe {
          display: flex;
          justify-content: space-between;
          margin-top: 0.1rem;
          align-items: center;
          .phone {
            color: #969696;
            font-size: 0.25rem;
            display: flex;
            align-items: center;
            img {
              width: 0.24rem;
              height: 0.24rem;
              margin-right: 0.1rem;
            }
          }
          .wechat {
            color: #969696;
            font-size: 0.25rem;
            display: flex;
            align-items: center;
            img {
              width: 0.24rem;
              height: 0.24rem;
              margin-right: 0.1rem;
            }
          }
          .save {
            background-color: #4477bc;
            color: #fff;
            padding: 0.2rem 0.25rem;
            font-size: 0.25rem;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }
  //遮罩层
  /deep/.van-overlay {
    top: 0.8rem;
  }

  .popupclass {
    padding: 0.45rem 0.25rem;
    padding-bottom: 0;
    .popupContainer {
      position: relative;
      height: 100%;
      width: 100%;
    }
    // 伪元素解决按钮遮挡
    .popupContainer::after {
      content: "";
      display: block;
      width: 100%;
      height: 1.5rem;
    }
    .option {
      margin-bottom: 0.4rem;
      .title {
        font-size: 0.35rem;
        font-weight: 700;
      }
      .isflex {
        display: flex;
        justify-content: space-between;
        /deep/ .van-radio__label {
          padding: 0.18rem 0.65rem;
        }
      }
      /deep/ .van-radio-group {
        margin: 0.15rem 0;
      }
      /deep/ .van-radio {
        // flex: 33.33%;
        // box-sizing: border-box;
      }
      /deep/ .van-icon {
        border: none;
        width: 0;
      }
      /deep/ .van-radio__label {
        margin-left: 0;
        display: inline-block;
        background-color: #f5f5f5;
        border-radius: 0.08rem;
        color: #4b4b4b;
        font-size: 0.3rem;
        box-sizing: border-box;
        padding: 0.15rem 0.3rem;
      }
      /deep/ .van-radio__icon {
        .van-icon-success:before {
          content: "";
        }
      }
    }
    // 按钮
    .twobtn {
      bottom: 0;
      left: 0;
      padding: 0 0.25rem;
      position: fixed;
      height: 1.5rem;
      line-height: 1.5rem;
      width: 100%;
      background-color: #fff;
      .btnContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        div {
          width: 3.3rem;
          text-align: center;
          line-height: 0.9rem;
          height: 0.9rem;
          border: 0.01rem solid #4477bc;
          border-radius: 0.1rem;
          font-size: 0.3rem;
        }
        .reset {
          color: #4477bc;
        }
        .complete {
          color: #fff;
          background-color: #4477bc;
        }
      }
    }
    // 选择时间
    .selecttime {
      /deep/ .van-hairline--top-bottom {
        position: static;
      }
      /deep/ .van-hairline--top-bottom::after {
        border: none;
      }
      /deep/ .van-collapse {
        .van-collapse-item {
          position: static;
          .van-cell {
            position: static;
            padding: 0;
            display: flex;
            align-items: center;
            .van-cell__title {
              font-size: 0.25rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 0.5rem;
            }
            .van-icon {
              width: 0.4rem;
              height: 0.5rem;
              font-size: 0.25rem;
              line-height: 0.5rem;
            }
          }
          .van-cell::after {
            border: none;
            position: static;
            content: "";
          }
        }
      }
      //滚动时间
    }
  }
}
</style>