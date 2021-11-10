<template>
  <div class="activitytheme">
    
    <el-header style="text-align: left; font-size: 12px">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >{{tag}}</el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        
      </el-header>
      <el-main>
       <div class="serachTab">
          <i class="el-icon-search"></i>
          搜索内容
      </div>
       <div class="serach-content">
          
           <el-row :gutter="20">
             <el-col :span="6">
                <div class="grid-content bg-purple">
                   <div class="demo-input-suffix">
             
  <el-input
    placeholder="请输入名称"
    prefix-icon="el-icon-search"
    v-model="input21">
  </el-input>
           </div>
                </div>
              </el-col>
             <el-col :span="6">
               <div class="grid-content bg-purple">
                      <div class="demo-input-suffix">
             
  <el-select v-model="value" placeholder="请选择类型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
           </div>
               </div>
               </el-col>
             <el-col :span="6"><div class="grid-content bg-purple">
               
               <el-button type="primary" round>
                    <i class="el-icon-search"></i>
                 搜索
                 </el-button>
               </div></el-col>
             
          </el-row>


        </div>
        <div class="theme-table">
         <el-header>
           <el-row :gutter="0">
  <el-col :span="4"><div class="grid-content bg-purple">
    <p class="add-theme">
             <i class="el-icon-circle-plus"></i>
             添加主题
           </p>
    </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
    <p class="add-random">
             <i class="el-icon-document"></i>
             生成随机码
           </p></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
   <p class="add-random">
             <i class="el-icon-view"></i>
             查看随机码
           </p> </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
     <p class="add-random">
             <i class="el-icon-upload2"></i>
             发布
           </p></div></el-col>
</el-row>
           
           
           
          
         </el-header>
          <el-table
    :data="tableData"
    height="358"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="编号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="描述">
    </el-table-column>
     <el-table-column
      prop="address"
      label="描述">
    </el-table-column>
     <el-table-column
      prop="address"
      label="描述" >
    </el-table-column>
     <el-table-column
      prop="address"
      label="描述" w>
    </el-table-column>
    <el-table-column label="操作" width="400">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-edit"></i>
          添加选项
          </el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-edit"></i>
          修改
          </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
          <i class="el-icon-delete"></i>
          删除
          </el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>
        <el-footer>el-footer</el-footer>
      
      </el-main>
      
      
      

    <!-- 路由出口 -->
        <router-view>
            
        </router-view>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        input21: '',
        dynamicTags: ['活动管理', '活动主题'],
        inputVisible: false,
        inputValue: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData: [{
          id: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: '4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.activitytheme {
  width: 100%;
}
.serachTab{
  width:100%;
  height:50px;
  background-color: #b3c0d1;
  text-align:left;
 
  line-height:50px;
}
.serach-content{
  width:100%;
  height:50px;
  line-height:50px;
  
  
}
.demo-input-suffix{
  display:inline!important;

}
.el-col p{
  margin:0;
}

</style>