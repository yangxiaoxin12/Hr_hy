<template>
    <div class="mainSidebar">
        <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
          {{tag}}
        </el-tag>
    </div>
</template>
<style>
.mainSidebar{
    width:1200px;
    height:40px;
    
    text-align: left;
}
.el-tag{
    margin:0 5px;
    
}
</style>
<script>
import bus from "./bus";
 export default {
     data(){
         return{
               dynamicTags: ['活动管理', '活动列表'],
               inputVisible: false,
               inputValue: ''

         }//return
     },//data
     methods:{
         handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
     }
 }

</script>