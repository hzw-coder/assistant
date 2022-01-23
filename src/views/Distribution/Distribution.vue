<template>
  <div id="distribution">
    <div class="container">
      <div class="top">
        <HeaderTop title="客户管理"></HeaderTop>
      </div>
      <div class="attend">
        <van-field
          v-model="newattend"
          name="新跟办人"
          label="新跟办人"
          input-align="right"
          placeholder="请选择跟办人"
          is-link
          readonly
        />
        <van-field
          v-model="approval"
          name="批准人"
          label="批准人"
          input-align="right"
          placeholder="请填写批准人姓名"
          error-message-align="right"
        />
        <!-- 变更说明 -->
        <van-field
          v-model="explain"
          rows="6"
          label="变更说明"
          class="explain"
          type="textarea"
          placeholder="提示：新跟办人留空，则按照“无跟办人”办理"
        />
      </div>
      <!-- 确认 -->
      <div class="confirm">
        <div class="confirmbtn">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
const HeaderTop = () =>
  import(
    /* webpackChunkName: headertop */ "../../components/Header/HeaderTop.vue"
  );
export default {
  name: "distribution",
  data() {
    return {
      newattend: "", //新跟办人
      approval: "", //批准人
      explain: "", //变跟说明
    };
  },
  methods: {},
  components: {
    HeaderTop,
  },
};
</script>
<style lang="scss" scoped>
#distribution {
  height: 100%;
  background-color: #f5f5f5;
  .container {
    height: 100%;
    position: relative;
    .top {
      padding: 0 0.25rem;
      background-color: #4477bc;
    }
    .attend {
      /deep/.van-cell {
        padding: 0.2rem 0.25rem;
        font-size: 0.3rem;
        .van-cell__title {
          position: relative;
        }
        .van-field__label {
          color: #000;
        }
        .van-cell__value {
          .van-field__body {
            .van-field__control {
              // 字体颜色
              color: #969799;
            }
          }
        }
      }
      // 变更说明
      .explain {
        display: block;
        // 文本域区域
        /deep/.van-field__body {
          margin: 0.2rem 0;
          background-color: #f6f7f9;
          border-radius: 0.15rem;
          .van-field__control {
            padding: 0.2rem;
          }
        }
      }
    }
    // 确认
    .confirm {
      padding: 0 0.25rem;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 1rem;
      .confirmbtn {
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        background-color: #4477bc;
        color: #fff;
        font-size: 0.3rem;
        border-radius: 0.1rem;
      }
    }
  }
}
</style>