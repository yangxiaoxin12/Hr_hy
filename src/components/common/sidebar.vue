<template>
  <div class="sidebar" style="min-height: 597px">
    <el-menu
      :unique-opened="true"
      :default-active="activePath"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @select="handleSelect"
      @close="handleClose"
      background-color="#304156"
      text-color="#fff"
      router
      active-text-color="rgb(64, 158, 255)"
    >
      <template v-for="(item, index) in menus">
        <el-menu-item
          v-if="item.menulist.length == 0"
          :index="'/' + item.router"
          :key="index"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.text }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.icon" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </template>
          <el-menu-item-group
            v-for="(item, index) in item.menulist"
            :key="index"
          >
            <el-menu-item
              v-if="!item.menulist || item.menulist.length == 0"
              v-show="!item.hideInMenu"
              :index="'/' + item.router"
              @click="jumpUrl(item.jump)"
              >{{ item.text }}</el-menu-item
            >
            <el-submenu
              v-if="item.menulist && item.menulist.length > 0"
              :index="item.icon"
              :key="index"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.text }}</span>
              </template>
              <el-menu-item-group
                v-for="(item, index) in item.menulist"
                :key="index"
              >
                <el-menu-item
                  v-if="!item.menulist || item.menulist.length == 0"
                  v-show="!item.hideInMenu"
                  :index="'/' + item.router"
                  @click="jumpUrl(item.jump)"
                  >{{ item.text }}</el-menu-item
                >
                <el-submenu
                  v-if="item.menulist && item.menulist.length > 0"
                  :index="item.icon"
                  :key="index"
                >
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.text }}</span>
                  </template>
                  <el-menu-item-group
                    v-for="(item, index) in item.menulist"
                    :key="index"
                  >
                    <el-menu-item
                      v-show="!item.hideInMenu"
                      :index="'/' + item.router"
                      @click="jumpUrl(item.jump)"
                      >{{ item.text }}</el-menu-item
                    >
                  </el-menu-item-group>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "./bus";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activePath: this.$route.path,
      menus: [
        {
          icon: "el-icon-info",
          router: "workSpace",
          text: "工作台",
          menulist: [
            // {
            //   router: "workSpace",
            //   text: "首页",
            //   // hideInMenu: true,
            // },
          ],
        },
        {
          icon: "el-icon-menu",
          router: "2",
          text: "组织",
          menulist: [
            {
              router: "orgBuild",
              text: "组织架构",
            },
            {
              router: "jobDescription",
              text: "岗位说明书",
            },
          ],
        },
        {
          icon: "el-icon-picture",
          router: "2",
          text: "员工",
          menulist: [
            {
              router: "eCard",
              text: "花名册",
            },
            {
              router: "cardvolumemanagement",
              text: "员工构成",
            },
          ],
        },
        {
          icon: "el-icon-s-data",
          router: "4",
          text: "招聘",
          menulist: [
            {
              router: "recruitPlan",
              text: "招聘计划",
            },
            {
              router: "postRelease",
              text: "职位发布",
            },
            {
              router: "filterRelease",
              text: "面试与评价",
            },
            {
              router: "toExamine",
              text: "审批",
              jump: "http://hyxcl.shhuayi.com/SitePages/SHHYPortal/PolicyLibrary.aspx",
            },
          ],
        },
        {
          icon: "el-icon-user-solid",
          router: "3",
          text: "培训",
          menulist: [
            {
              router: "trainingPlan",
              text: "培训计划",
            },
            // {
            //   router: "trainingImplementation",
            //   text: "培训实施",
            // },
            {
              router: "trainingRecords",
              text: "培训记录",
            },
            {
              router: "learnPlatform",
              text: "集团学习平台",
              jump: "http://www.shhuayi-elearning.cn/login.htm",
            },
            {
              text: "知识库",
              menulist: [
                {
                  router: "31",
                  text: "体系文件",
                  menulist: [
                    {
                      router: "iso",
                      text: "ISO",
                    },
                    {
                      router: "lhrh1",
                      text: "两化融合",
                    },
                  ],
                },
                {
                  router: "21",
                  text: "专业课程",
                  menulist: [
                    {
                      router: "gl",
                      text: "管理",
                    },
                    {
                      router: "gy",
                      text: "工艺",
                    },
                    {
                      router: "jdy",
                      text: "机电仪",
                    },
                    {
                      router: "znzz",
                      text: "智能制造",
                    },
                  ],
                },
                {
                  router: "11",
                  text: "经验知识库",
                  menulist: [
                    {
                      router: "sc",
                      text: "生产",
                    },
                    {
                      router: "zhinzz",
                      text: "智能制造",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          icon: "el-icon-message",
          router: "3",
          text: "绩效",
          menulist: [
            {
              router: "testplan",
              text: "考核计划",
            },
            {
              router: "markDocument",
              text: "绩效档案",
            },
          ],
        },
        {
          icon: "el-icon-setting",
          router: "3",
          text: "创新管理",
          menulist: [
            {
              router: "roleManagement",
              text: "合理化建议",
            },
            {
              router: "account",
              text: "技术创新",
            },
            {
              router: "dictionary",
              text: "专利",
            },
          ],
        },
      ],
    };
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.activePath = val.path;
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    handleSelect(key, keyPath, value) {
      bus.$emit("message", {
        router: key,
        text: value.$options._renderChildren[0].text,
      });
    },
    jumpUrl(url) {
      if (url) {
        console.log(url);
        window.open(url);
        this.$router.back();
      }
    },
  },
  created() {},
};
</script>

