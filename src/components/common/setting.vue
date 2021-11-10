<!-- 操作 -->
<template>
  <div class="optSetting">
      <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
 
            <svg-icon style="width:40px;height:40px" icon-class="setting"></svg-icon>
            <!-- <i style="width:100px;height:100px" class="el-icon-success"></i> -->
          
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="checkOut">退出</el-dropdown-item>
    <el-dropdown-item command="checkUser">切换账号</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>

<script>

export default {
  data () {
    return {
    };
  },

  components:{},

  methods: {
       handleCommand(command) {
        //this.$message('click on item ' + command);
        //console.log("点击")
        if(command=="checkOut"){
            //console.log("checkOut")
            this.$Service.get("/api/logout.action").then(res=>{
                console.log(res);
                if(res.data.status==0){
                  this.$message.success(res.data.msg);
                  this.$router.push("/");
                }else{
                  this.$message(res.data.msg)
                }
            }).catch(error=>{
                this.$message.error("退出登录失败!接口原因")
            })
        }else if(command=="checkUser"){
            this.$router.push("/");
        }
      }
  }
}

</script>
<style  scoped>

 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>