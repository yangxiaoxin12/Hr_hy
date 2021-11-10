<template>
  <div class="votingDetails">
    <div>投票文件导入</div>
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="uplodadUrl"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-change="onchange"
      :limit="1"
      :on-exceed="handleExceed"
      :before-upload="beforeAvatarUpload"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传xls/xlsx文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {
  mounted(){
    this.uplodadUrl=sessionStorage.getItem("BASE_URL")+"/uploadFile.action"
    console.log(this.uplodadUrl);
  },
  data() {
    return {
      fileList: [
        // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        // {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ]
    };
  },
  methods: {
    onchange(file,fileList){
       let str = file.name
        let index = str.lastIndexOf(".")
        str =str .substring(index+1,str.length);
        let isFlag = str === 'xlsx' || str === 'xls'
        if (!isFlag) {
          this.$message.error('上传文件只支持xlsx和xls')
          this.$refs.upload.clearFiles()
        }
        let isLt = file.size / 1024 >= 500 ? false : true
        if (!isLt) {
            this.$message.error('上传文件大小不能超过500KB!')
            this.$refs.upload.clearFiles()
        }
        return isLt && isFlag
    },
    //   文件上传前判断文件格式
    beforeAvatarUpload(file) {
        console.log(file)

    },
    handleExceed(files, fileList) {
        this.$message.warning(`只能添加一个上传文件`);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

