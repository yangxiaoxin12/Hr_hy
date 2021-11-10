<template>
  <div>
    <el-tabs
      style="height:100%;"
      v-model="editableTabsValue"
      type="card"
      @tab-remove="removeTab"
      @tab-click="selectionRoute"
    >
      <!-- 固定的   没有删除功能 -->
      <el-tab-pane
      
        v-for="(item, index) in editableTabs"
        :key="index"
        :label="item.text"
        :name="item.router"
      ></el-tab-pane>
     

      <!-- 可以删除的  tab -->
      <el-tab-pane
        v-for="item in editableTabsClos"
        :key="item.text"
        :label="item.text"
        :name="item.router"
        closable
      ></el-tab-pane>

      <div class="cont">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </el-tabs>
  </div>
</template>

<script>
import bus from "./bus";

export default {
  name: "",

  components: {},

  data() {
    return {
      editableTabsValue: this.$route.path,
      editableTabs: [
        {
          router: "/activitytype",
          text: "活动分类"
        },
        {
          router: "/activitytheme",
          text: "新建活动"
        }
      ],
      editableTabsClos: []
    };
  },

  methods: {
    

    removeTab(targetName) {
      let tabs = this.editableTabsClos;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.router === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.router;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.$router.push(activeName);
      this.editableTabsClos = tabs.filter(tab => tab.router !== targetName);
      let val = JSON.stringify(this.editableTabsClos);
      sessionStorage.setItem("editableTabsClos", val);
    },
    selectionRoute(val, da) {
      this.$router.push(val.name);
    }
  },

  watch: {
    editableTabs: {
      handler(val, oldVal) {
        console.log("editableTabs[1].text: " + val[1].text, oldVal[1].text); //但是这两个值打印出来却都是一样的
      },
      deep: true
    }
  },
  created() {
    console.log("1");
    if (sessionStorage.getItem("editableTabsClos")) {
      var editableTabsClos = JSON.parse(
        sessionStorage.getItem("editableTabsClos")
      );
      console.log(editableTabsClos);
      this.editableTabsClos = editableTabsClos;
    }

    bus.$on("message", e => {
      if (e.router == "/activitytype" || e.router == "/activitytheme") {
        this.editableTabsValue = e.router;
      } else {
        let indexofTab = JSON.stringify(this.editableTabsClos).indexOf(
          JSON.stringify(e)
        );
        if (indexofTab == "-1") {
          this.editableTabsClos.push(e);
        }
        this.editableTabsValue = e.router;
        let val = JSON.stringify(this.editableTabsClos);
        sessionStorage.setItem("editableTabsClos", val);
      }
    });
  }
};
</script>
<style lang="" scoped>
.cont {
  padding: 15px;
}
/* 滚动动画 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
>>> .el-tabs__header {
  margin: 0px 0 10px 15px;
  padding-top: 10px;
}

</style>
