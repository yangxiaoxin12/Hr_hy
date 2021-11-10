<template>
  <div class="testplan">
    <div class="bartop">
      
    </div>
    <div class="content">
      <el-row :gutter="20" class="row1">
        <el-col :span="5" v-for="item in createDataJson" :key="item.router">
          <div class="grid-content bg-purple">
            <!-- <el-image style="width: 262px; height: 192px" :src="url"></el-image> -->
            <img
              :src="item.image"
              style="width: 262px; height: 192px"
              alt
              srcset
            />
          </div>
          <el-button @click="handleClick(item)" type="primary">{{item.name}}</el-button>
        </el-col>
          <!--<el-col :span="5">
         <div class="grid-content bg-purple">
            <img
              src="../../assets/themeImg/pic_choujiang.png"
              style="width: 262px; height: 192px"
              alt
              srcset
            />
            
          </div>
          <el-button @click="createLottery()" type="primary">创建抽奖</el-button>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            
            <img
              src="../../assets/themeImg/pic_wenjuan.png"
              style="width: 262px; height: 192px"
              alt
              srcset
            />
          </div>
          <el-button @click="createQuestion()" type="primary">创建问卷</el-button>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <img
              src="../../assets/themeImg/pic_baoming.png"
              style="width: 262px; height: 192px"
              alt
              srcset
            />
          </div>
          <el-button @click="createApplication()" type="primary">创建报名</el-button>
        </el-col>
         <el-col :span="5">
          <div class="grid-content bg-purple">
            <img
              src="../../assets/themeImg/pic_baoming.png"
              style="width: 262px; height: 192px"
              alt
              srcset
            />
          </div>
          <el-button @click="createSignIn()" type="primary">创建签到</el-button>
        </el-col> -->

      </el-row>
      
    </div>
  </div>
</template>
<script>
import mainSidebar from "@/components/common/mainSidebar";
import { Store } from 'vuex';
// import store from '@/store'
//import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
export default {
  components: {
    mainSidebar,
   // Pagination
  },
  mounted(){
    const dataArr=[
        {
          name:'创建投票',
          router:'/CreateVote',
          image: require("@/assets/themeImg/pic_toupiao.png"),

        },
        {
          name:'创建签到',
          router:'/createSignIn',
          image: require("@/assets/themeImg/pic_qiandao.png"),
          
        },
        {
          name:'创建抽奖',
          router:'/createLottery',
          image: require("@/assets/themeImg/pic_choujiang.png"),
          
        },
        {
          name:'创建问卷',
          router:'/createQuestion',
          image: require("@/assets/themeImg/pic_wenjuan.png"),
          
        },
        {
          name:'创建报名',
          router:'/createApplication',
          image: require("@/assets/themeImg/pic_baoming.png"),
          
        },
        {
          name:'创建点赞',
          router:'/createThumbUp',
          image: require("@/assets/themeImg/pic_dianzan.png"),
          
        },
        {
          name:'创建红包',
          router:'/createRedPacket',
         image: require("@/assets/themeImg/pic_hongbao.png"),
          
        },
        {
          name:'创建积分',
          router:'/createIntegral',
          image: require("@/assets/themeImg/pic_jifen.png"),
          
        },
        
      ];
      // this.list=dataArr;
      this.createDataJson=dataArr;
       
      
     
  },//mounted
  data() {
    return {
      list:null,
      total:9,
      starti:0,
      endi:0,
      currentPage:1,
      pageSize:8,
      url: "../../assets/themeImg/pic_baoming.png",
      createDataJson:null,
    }; //return
  },

  methods: {
   
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        // if(val==1){

        // }else{

        // }
      },
    handleClick(item) {
      // console.log("创建活动");
      console.log(item.name);
       this.$store.commit("getname",item.name)
      this.$router.push(item.router);
    },
    // createSignIn() {
    //   console.log("创建签到");
    //   this.$router.push("/createSignIn");
    // },
    // createLottery() {
    //   console.log("创建抽奖活动");
    //   this.$router.push("/createLottery");
    // },

    // createQuestion() {
    //   console.log("创建问卷");
    //   this.$router.push("/createQuestion");
    // },
    // createApplication() {
    //   console.log("创建报名");
    //   this.$router.push("/createApplication");
    // },
    // createThumbUp() {
    //   console.log("创建点赞");
    //   this.$router.push("/createThumbUp");
    // },
    // createRedPacket() {
    //   console.log("创建红包");
    //   this.$router.push("/createRedPacket");
    // },
    // createIntegral() {
    //   console.log("创建积分");
    //   this.$router.push("/createIntegral");
    // }
  } //methods
}; //ex
</script>
<style scoped>
div {
  padding: 0px !important;
}

.testplan {
  width: 100%;
  width: 1200px;
  height: 800px;
}

.content {
  width: 1150px;

  height: 548px;
  margin-top: 22px;
}
.el-row {
  margin-bottom: 20px;
  margin-left: -8px;
}
.el-col {
  border-radius: 4px;
  text-align: center;
  margin-left: 20px;
  height: 256px;
  width: 270px;
  padding: 0px;
}
.grid-content {
  width: 270px;
  border-radius: 4px;
  min-height: 36px;
  border: 4px dotted #ccc;
  height: 200px;
  box-sizing: border-box;
  text-align: center;
}
.row-bg {
  width: 270px;
  padding: 10px 0;
  background-color: #f9fafc;
  border: 4px dotted #ccc;
  height: 200px;
  box-sizing: border-box;
  text-align: center;
}
.el-button {
  width: 200px;
  height: 32px;
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
  margin: 13px 0px 0px 0px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  border-color: rgba(10, 171, 149, 1);
}
.el-button {
  /* width:56px;
height:14px; */
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding: 0px;
}
</style>