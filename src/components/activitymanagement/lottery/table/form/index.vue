<template>
  <div class="dialog-container">
    <el-dialog
      :title.sync="name"
      :visible.sync="visible"
      @close="$emit('update:show', false)"
      :show="show"
    >
      <el-form :model="prize">
        <!-- <el-form-item label="奖品等级" :label-width="formLabelWidth">
          <el-input  placeolder="请输入" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="奖品名称" :label-width="formLabelWidth">
          <el-input v-model="prize.prizeName" placeolder="请输入" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="奖品类型" :label-width="formLabelWidth">
          <el-input v-model="prize.type" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item :label-width="formLabelWidth" label="奖品类型" prop="type">
              <el-select style="width:380px" v-model="prize.type" placeholder="请选择奖品类型">
                <el-option label="实物" value=1></el-option>
                <el-option label="电子券" value=2></el-option>
                <el-option label="红包" value=3></el-option>
              </el-select>
            </el-form-item>
        <el-form-item label="剩余库存" :label-width="formLabelWidth">
          <el-col :span="22">
          <el-input v-model="prize.stock" autocomplete="off"></el-input>
           </el-col>
              <el-col :span="2">个</el-col>
        </el-form-item>
        <el-form-item label="中奖限制" :label-width="formLabelWidth">
          <el-col :span="22"><el-input v-model="prize.prizeLimit" autocomplete="off"></el-input></el-col>
          
          <el-col :span="2">人</el-col>
        </el-form-item>
        <el-form-item label="中奖概率" :label-width="formLabelWidth">
          
          <el-col  :span="22"><el-input v-model="prize.chance" autocomplete="off"></el-input></el-col>
          <el-col style="width:23px;padding-left:15px font-weight:900" :span="2">%</el-col>
        </el-form-item>

        <!-- <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="prize.describe" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="图片路径" style="margin-top:40px;" :label-width="formLabelWidth">
          <!-- <el-input v-model="prize.imageUrl" autocomplete="off"></el-input> -->

          <el-upload
            :action="uplodadUrl"
            list-type="picture-card"
            accept=".jpg, .png"
            :on-success="handleAvatarSuccess"
            :on-remove="handleRemove"
            :on-preview="handlePictureCardPreview"
            :file-list="fileLists"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle(add)">取 消</el-button>
        <el-button type="primary" @click="onSure(add)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style scoped>
.el-form {
  width: 600px;
  height: 420px;
}
.el-form-item__content {
  width: 600px !important;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(200, 202, 204, 1);
  border-radius: 4px;
  height: 32px !important;
}
.el-form-item {
  width: 500px;
  height: 32px !important;
}
</style>
<script>
export default {
   mounted(){
    this.uplodadUrl=sessionStorage.getItem("BASE_URL")+"/uploadFile.action"
    console.log(this.uplodadUrl);
  },
  data() {
    return {
      name: "",
      visible: this.show,
      formLabelWidth: "120px",
      uplodadUrl:null,
      prize: {
        prizeName: "",
        type: 0,
        stock: 0,
        image: null,
        prizeLimit: 0,
        chance:0
        
      },
      fileLists: []
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    add: {
      type: String,
      default: "新增"
    },
    curIndex: {
      type: Number,
      default: 0
    },
    curRow: {
      type: Object,
      default: {}
    }
  },
  watch: {
    show() {
      this.visible = this.show;
      console.log(this.add);
      if (this.add == "new") {
        this.name = "新增";
        this.prize = {
          prizeName: "",
          type: null,
          stock: null,
          image: null,
          prizeLimit: null,
          chance:null
          
        };
      } else if ((this.add = "update")) {
        this.name = "修改";
        this.prize = this.curRow;
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.image = URL.createObjectURL(file.raw);
      console.log(this.image);
      console.log(res);
      console.log(file);
      if(res.status==0){
        console.log("回到")
        this.prize.image=res.data.path;
        this.$message.success("图片上传成功")
      }else{
        this.$message.error("图片上传失败")
      }
      
    },
    handleRemove(file, fileList) {
      console.log(file);
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      console.log(file);
      this.dialogVisible = true;
    },
    onSure(name) {
       if (this.add == "update") {
            console.log(this.prize)
            this.$emit("UpdatePrizeData", this.prize);
       } else if (this.add == "new") {
        // 1.子组件触发父组件方法
        // $emit第一个参数为所要触发的父组件函数，函数名可自定义但要与父组件中对应函数名同名
        // $emit第二个参数就是子组件向父组件传递的参数
        this.$emit("prizeData", this.prize);
       }
    },
    cancle(name) {
          this.show =false;
          this.$emit("showValue", this.show);
      
    }
  }
};
</script>