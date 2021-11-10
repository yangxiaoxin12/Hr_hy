<template>
  <div class="zhanghu">
    <div class="main-header">
      <div><a href="#">面试通知</a><a href="#">面试评价</a></div>
    </div>
    <div class="content">
      <el-form
        style="text-align: left"
        ref="form"
        :model="form"
        label-width="90px"
      >
        <el-form-item label="收件人:">
          <el-input style="width: 40%" v-model="form.addressee"></el-input>
        </el-form-item>
        <el-form-item label="发送标题:">
          <el-input style="width: 40%" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="邮件内容:">
          <el-input
            style="width: 80%; font-size: 16px"
            type="textarea"
            :rows="18"
            v-model="form.content"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="send">立即发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  prizeName: "",

  components: { Pagination },

  data() {
    return {
      form: {
        name: "",
        addressee: "",
        delivery: false,
        type: [],
        title: "",
        content: "",
      },
      value: "",
    };
  },

  watch: {},

  methods: {
    //接口已完成
    send() {
      this.$http
        .post(this.$api.email.url, {
          toUser: this.form.addressee,
          title: this.form.title,
          content: this.form.content,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    this.send();
  },

  created() {},
};
</script>
<style lang='less' scoped>
.demo-form-inline {
  margin-left: 0px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
.main-header {
  width: 99%;
  height: 70px;
  border: 1px solid red;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
  a {
    font-size: 20px;
    margin-left: 20px;
  }
}
.content {
  width: 99%;
  height: 700px;
  margin-top: 20px;
  margin-bottom: 70px;
}
.span_ {
  display: inline-block;
  width: 80px;
  // border: 1px solid red;
  font-size: 18px;
  text-align: right;
}
</style>