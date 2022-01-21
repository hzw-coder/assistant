<template>
  <div id="addcustomer">
    <div class="container">
      <div class="top">
        <HeaderTop title="添加客户"></HeaderTop>
      </div>
      <!-- 小贴士tips -->
      <div class="tips">
        <div class="tips_top">
          <div class="title">
            <img src="../../assets/images/灯泡@2x.png" alt="" />
            <span>小贴士</span>
          </div>
          <div class="notips">不再提示</div>
        </div>
        <div class="content">
          客户添加/绑定指的是将客户直接添加到售楼系统或将微信客户与售楼系统已有客户进行绑定，添加/绑定后:
        </div>
        <div class="itemList">
          <div class="item">
            1、若为新客户，则录入为意向客户，进入客户保护期，其他状态如预留客户、成交客户则保持对应状态
          </div>
          <div class="item">
            2、在企业微信聊天框可以快速进入客户详细进行查看
          </div>
          <div class="item">
            3、在意向客户列表可快速调起与客户企业微信聊天窗口
          </div>
        </div>
      </div>
      <!-- 潜在客户绑定 -->
      <div class="bindtitle">潜在客户绑定</div>
      <div class="bindselect">
        <div class="left">潜在客户</div>
        <div class="right">
          <span>请选择</span>
          <img src="../../assets/images/进入-右-灰@2x.png" alt="" />
        </div>
      </div>
      <div class="bindtips">
        <div class="imgcon">
          <img src="../../assets/images/灯泡-灰@2x.png" alt="" />
        </div>
        <div class="con">
          绑定潜在客户后，才能多次客户使用“小程序访问轨迹”和“企业微信聊天”功能
        </div>
      </div>
      <div class="formtitle">基本信息</div>
      <!-- 表单区域 -->
      <div class="formContainer">
        <van-form>
          <van-field
            v-model="formObj.project"
            name="所属项目"
            label="所属项目"
            input-align="right"
            placeholder="虚拟项目"
            is-link
            error-message-align="right"
            readonly
            @click="selectProject"
          />
          <van-field
            v-model="formObj.phone"
            name="手机号码"
            label="手机号码"
            placeholder="必填"
            input-align="right"
            type="tel"
            error-message-align="right"
            required
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="formObj.username"
            name="客户姓名"
            label="客户姓名"
            input-align="right"
            placeholder="必填"
            error-message-align="right"
            required
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            required
            error-message-align="right"
            name="sex"
            input-align="right"
            label="性别"
          >
            <template #input>
              <van-radio-group v-model="formObj.sex" direction="horizontal">
                <van-radio name="男">男</van-radio>
                <van-radio name="女">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field
            v-model="formObj.username"
            name="意向度"
            required
            label="意向度"
            placeholder="请选择客户意向度"
            error-message-align="right"
            input-align="right"
            is-link
            readonly
            @click="selectDegree"
          />
        </van-form>
      </div>
      <!-- 按钮区域 -->
      <div class="addbtn">
        <div @click="addSubmit" class="btn">完成绑定</div>
      </div>

      <!-- 绑定框 -->
      <van-dialog v-model="showDialog" :show-confirm-button="false">
        <div class="dialogcon">
          客户已保存到售楼系统，可在“意向客户”列表查看，请完善客户的详细信息
        </div>
        <div class="dialogbtn">
          <div @click="futurebtn" class="future">以后再说</div>
          <div @click="nowbtn" class="now">现在完善</div>
        </div>
      </van-dialog>

      <!-- 重新激活框 -->
      <van-dialog v-model="showActiveDialog" :show-confirm-button="false">
        <div class="dialogcon">
          该客户目前为公共客户，是否重新激活为意向客户?
        </div>
        <div class="dialogbtn">
          <div class="future">取消</div>
          <div class="now">重新激活</div>
        </div>
      </van-dialog>
    </div>
  </div>
</template>
<script>
const HeaderTop = () =>
  import(
    /* webpackChunkName: "HeaderTop" */ "../../components/Header/HeaderTop.vue"
  );
export default {
  name: "addcustomer",
  data() {
    return {
      formObj: {
        project: "",
        phone: "",
        sex: "男",
      },
      // 绑定框
      showDialog: false,
      // 激活框
      showActiveDialog: false,
    };
  },
  methods: {
    // 选择项目
    selectProject() {
      console.log("选择项目");
    },
    // 选择客户意向度
    selectDegree() {
      console.log("选择客户意向度");
    },
    // 提交绑定
    addSubmit() {
      this.showDialog = true;
    },
    // 以后再说
    futurebtn() {
      this.showDialog = false;
    },
    // 现在完善
    nowbtn() {},
  },
  components: {
    HeaderTop,
  },
};
</script>
<style lang="scss" scoped>
#addcustomer {
  height: 100%;
  .container {
    background-color: #f5f5f5;
    height: 100%;
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
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
    // 绑定
    .bindtitle {
      padding: 0 0.25rem;
      width: 100%;
      height: 0.9rem;
      background-color: #f5f5f5;
      line-height: 0.9rem;
      font-size: 0.3rem;
      font-weight: 700;
    }
    .bindselect {
      width: 100%;
      height: 0.9rem;
      display: flex;
      padding: 0 0.25rem;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      font-size: 0.3rem;
      .right {
        color: #9a9a9a;
        display: flex;
        align-items: center;
        img {
          width: 0.24rem;
          height: 0.24rem;
          margin-left: 0.1rem;
        }
      }
    }
    .bindtips {
      padding: 0 0.25rem;
      width: 100%;
      background-color: #f5f5f5;
      height: 0.9rem;
      display: flex;
      font-size: 0.25rem;
      align-items: center;
      .imgcon {
        height: 0.5rem;
        img {
          width: 0.18rem;
          height: 0.24rem;
        }
      }
      .con {
        height: 0.5rem;
        color: #5d5d5d;
        margin-left: 0.2rem;
      }
    }
    .formtitle {
      padding: 0 0.25rem;
      width: 100%;
      height: 0.8rem;
      background-color: #f5f5f5;
      line-height: 0.8rem;
      font-size: 0.3rem;
      font-weight: 700;
    }
    // 表单区域
    .formContainer {
      /deep/.van-form {
        .van-cell {
          padding: 0.2rem 0.25rem;
          font-size: 0.3rem;
          .van-cell__title {
            position: relative;
          }

          .van-field__label {
            color: #000;
          }
          .van-cell__title::after {
            position: absolute;
            content: "*";
            color: #ee0a24;
          }
          .van-cell__value {
            .van-field__body {
              .van-field__control {
                // 字体颜色
                color: #969799;
                .van-radio--horizontal {
                  margin: 0;
                  margin-left: 0.48rem;
                }
              }
              .van-radio__label {
                // 单选按钮label颜色
                color: #969799;
              }
            }
            .van-field__error-message {
              font-size: 0.24rem;
            }
          }
        }
        // placeholder字体颜色
        .van-field--error {
          .van-field__control::placeholder {
            color: #969799;
          }
        }
        .van-cell--required::before {
          content: "";
        }
      }
    }

    // 按钮区域
    .addbtn {
      padding: 0 0.25rem;
      width: 100%;
      margin-top: 0.5rem;
      .btn {
        height: 0.8rem;
        width: 100%;
        line-height: 0.8rem;
        text-align: center;
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.3rem;
        background-color: #4477bc;
      }
    }
    // 绑定框
    .van-dialog {
      box-sizing: border-box;
      height: 3.6rem;
      padding: 0.6rem 0.5rem;
      .dialogcon {
        font-weight: 700;
        font-size: 0.32rem;
        text-align: center;
      }
      .dialogbtn {
        display: flex;
        margin-top: 0.6rem;
        justify-content: space-between;
        div {
          flex: 50%;
          height: 0.85rem;
          text-align: center;
          line-height: 0.85rem;
          border: 0.01rem solid #4477bc;
          border-radius: 0.1rem;
          font-size: 0.3rem;
        }
        .future {
          margin-right: 0.24rem;
          color: #4477bc;
        }
        .now {
          background-color: #4477bc;
          color: #fff;
        }
      }
    }
  }
}
</style>