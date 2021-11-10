<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
* {
  font-size: 14px;
}
::-webkit-scrollbar {
  display: none;
}
::-moz-scrollbar {
  display: none;
}
::-ms-scrollbar {
  display: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* width:1440px;
  height:900px; */
  width: 100%;
  height: 100%;
  font-family: PingFang SC;
  font-weight: 500;
  overflow: hidden;
}
.el-tabs__item.is-active {
  color: white;
  background: #0aab95;
}
.happy-scroll-container .happy-scroll-content {
  display: block !important;
  width: 240px !important;
}
.el-menu-item .is-active {
  color: #0aab95 !important;
}
.sidebar .el-menu {
  border-right: none !important;
}

.el-form--inline .el-form-item {
  margin-right: 30px;
  width: 270px !important;
}
.el-form--inline .el-form-item__content {
  width: 180px !important;
}

.el-form--inline .el-form-item__label {
  width: 84px !important;
  height: 14px !important;
  display: inline;
  padding-right: 9px;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
}
.dao {
  text-align: left;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: rgba(143, 9, 17);
  font-weight: bold;
  background: rgb(246, 243, 243);
}
.el-form-item__label {
  padding: 0px 9px 0px 0px !important;
  /* text-align: left!important;
  border:1px solid #000; */
}
.el-step__icon.is-text {
  width: 40px;
  height: 40px;
}
.el-step.is-horizontal .el-step__line {
  top: 20px;
}
.el-step__title.is-success {
  color: #0aab95 !important;
}
.el-step__head.is-success {
  color: #0aab95 !important;
  border-color: #0aab95 !important;
}
.el-card__header {
  padding: 2px 2px !important;
  height: 40px !important;
}
.el-card__body {
  padding: 5px !important;
}
.el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.form-outer {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 300px;
  }
}
</style>
