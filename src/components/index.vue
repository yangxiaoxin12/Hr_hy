<template>
  <div class="index">
    <!-- {{$store.state.userinfo}} -->

    <el-container>
      <!-- 左侧导航 -->
      <div class="sidebar-container">
        <happy-scroll
          style="width: 100%; height: 100%"
          size="5"
          hide-horizontal
          bigger-move-h="end"
          smaller-move-h="end"
          color="rgba(144,147,153,.3)"
          resize
        >
          <el-aside
            width="100%"
            height="100%"
            style="background-color: #304156"
          >
            <!-- <div class="top-text" style="display:inline-block"> -->
            <!-- <img src="../assets/login/icon.png" style="width:48px;height:48px;vertical-align:middle" alt srcset /> -->

            <h4
              class="title"
              style="
                width: 240px;
                height: 56px;
                background: rgba(10, 171, 149, 1);
                text-align: center;
                display: inline-block;
                font-size: 18px;
                color: rgba(255, 255, 255, 1);
                line-height: 56px;
                margin: 0px 0px 0px 0px !important;
                box-sizing: border-box;
              "
            >
              <img
                src="../assets/login/icon.png"
                style="
                  width: 48px;
                  height: 48px;
                  vertical-align: middle;
                  margin-left: -20px;
                "
                alt
                srcset
              />华谊新材料eHR平台
            </h4>
            <!-- </div> -->
            <!-- 组件 -->
            <sidebar></sidebar>
          </el-aside>
        </happy-scroll>
      </div>
      <div class="right" style="width: calc(100% - 210px); margin-left: 240px">
        <!-- 上导航 card -->
        <publiccard class="main-container"> </publiccard>
      </div>

      <!-- 右侧内容 -->
      <!-- <el-container style="margin-top:60px;">
        <router-view></router-view>
      </el-container>-->
    </el-container>
  </div>
</template>
<script>
import sidebar from "@/components/common/sidebar";
import publiccard from "@/components/common/publiccard";

export default {
  components: {
    sidebar,
    publiccard,
  },
  data() {
    return {
      tableData: [
        {
          date: "",
          name: "",
          address: "",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.sidebar-container {
  width: 240px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.happy-scroll-container {
  max-height: 900px !important;
}
.main-container {
  min-height: 100%;

  position: relative;
  width: 100%;
}
.happy-scroll-content {
  width: 240px;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-menu-item {
  background-color: #1f2d3d !important;
}
.el-aside {
  /* border:2px solid red; */
  color: #333;
  /* overflow-y: scroll; */
  /* background-color: #545c64 !important; */
  /* padding: 0 2px;
   */
  overflow: hidden;
}
.el-aside .el-submenu__title {
  padding: 0 40px !important;
}
body,
html,
#app,
.index {
  height: 100%;
}

.el-container {
  height: 100% !important;
  position: relative;
  width: 100%;
}
.optSetting {
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 800;
  position: absolute;
  top: 0px;
  left: 25%;
  line-height: 60px;
}
</style>
