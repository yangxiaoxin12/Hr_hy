<template>
  <div class="prizePointList">
    <div class="main-header">
      <el-button type="primary" @click="addPrize('')">新增奖品条目</el-button>
      <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form
          ref="prize"
          refs="prize"
          label-width="100px"
          style="width:500px;"
          :model="prize"
        >
          <el-form-item label-width="100px" label="奖品名称:">
            <el-input
              prop="prizeName"
              v-model="prize.prizeName"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="奖品类型:" prop="type">
            <el-select
              style="width:400px"
              v-model="prize.type"
              placeholder="实物"
            >
              <el-option label="实物" value="0"></el-option>
              <el-option label="--xuni--" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label-width="100px" label="奖品总数:">
            <el-input
              prop="stock"
              v-model="prize.stock"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="积分:">
            <el-input
              prop="consumeIntegral"
              v-model="prize.consumeIntegral"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="时间:">
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label-width="100px" v-model="prize.image" class="restCss" label="奖品图片:">
            <el-upload
              :action="uplodadUrl"
              list-type="picture-card"
              accept=".jpg, .png"
              :on-preview="handlePictureCardPreview"
              :file-list="fileLists"
              :on-success="success"
              :on-remove="handleRemove"
            >
              
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="back">取 消</el-button>
          <el-button type="primary" @click="onSave('prize')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="content">
        
    <el-table
      class="tableDataCss"
      :data="tableData"
      border
      stripe
      :row-style="{ height: '56px' }"
      :cell-style="{ padding: '5px 0px' }"
      style="width: 100%; height:712px"
    >
      <el-table-column prop="image" label="图片">
        <div class="demo-image__error">
          <div class="block" style="width: 100%; height:56px">
            <el-image :src="url" style="width: 100%; height:56px"></el-image>
            <!-- <img src="../../assets/s.png" alt srcset /> -->
          </div>
        </div>
      </el-table-column>
      <el-table-column prop="prizeName" label="奖品名称"></el-table-column>
      <el-table-column prop="type" label="奖品类型"></el-table-column>
      <el-table-column prop="stock" label="奖品总数"></el-table-column>
      <el-table-column
        prop="consumeIntegral"
        sortable
        label="积分"
      ></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleChange(scope.row)" size="small"
            >修改</el-button
          >
          <el-button type="text" @click="handleDelete(scope.row)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    </div>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>
<style scoped>
.prizePointList {
  width: 100%;
  height: 840px;
  background-color: rgba(255, 255, 255, 0.2);
}
.main-header {
  width: 1150px;
  height: 70px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.content{
  width: 1150px;
  height:608px;
  margin-bottom: 100px;
}
.el-button--success {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
}
</style>
<script>
import Pagination from "@/components/Pagination";
export default {
  components: { Pagination },
  mounted() {
    this.getList();
    this.uplodadUrl=sessionStorage.getItem("BASE_URL")+"/uploadFile.action"
    console.log(this.uplodadUrl);
  
  },
  data() {
    return {
      title: "新增奖品",
      uplodadUrl:null,
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      url:"",
      //url: require("@/assets/l.png"),
      dialogFormVisible: false,
      dialogVisible: false,
      dialogImageUrl: null,
      fileLists: [], //图片表
      value2: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      prize: {
        prizeName: "",
        type: null,
        stock: null,
        image: null,
        consumeIntegral: ""
      },
      tableData: [
        {
          image: "1",
          // "No":"1",
          prizeName: "扫地机器人",
          type: "you11",
          stock: "1390",
          consumeIntegral: "3908",
          time: "2020-03-27"
        }
      ]
    };
  },
  methods: {
    getList() {
      console.log(this.listQuery)
      this.$Service.get(
        "/api/getIntegralPrizeList.action?username=&mobile=&createTime=&pageNo=" +
          this.listQuery.page +
          "&pageSize=" +
          this.listQuery.limit
      )
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.tableData = res.data.data;
            this.total = res.data.count;
          } else {
            this.$message.error("未获得数据");
          }
        })
        .catch(err => {
          this.$message.error("未获得数据,接口原因!");
        });
    },
    back() {
      console.log("back.....");
      this.prize = {
        prizeName: "",
        type: null,
        stock: null,
        image: null,
        consumeIntegral: ""
      };

      this.dialogFormVisible = false;
    },
    addPrize(prize) {
      if (prize == "") {
        this.dialogFormVisible = true;
        this.title = "新增奖品";
        this.prize = {
          prizeName: "",
          type: null,
          stock: null,
          image: null,
          consumeIntegral: ""
        };
       
      }
    },
    // //修改
    handleChange(row) {
      console.log(row);
      this.dialogFormVisible = true;
      this.prize = row;
      this.title="修改奖品";
      const sendParams = JSON.stringify(this.prize);

    },

    //删除
    handleDelete(row) {
      //https://localhostIP:端口/SX_activitycenter/api/deletePrize.action
      console.log(row);
      let param = {};
      param.id = row.id;
      console.log(param);
      console.log("你拥抱暖意");

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);

          this.$Service.post(
              "/api/deletePrize.action",
              JSON.stringify(param),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*", //解决cors头问题
                  "Access-Control-Allow-Credentials": "true", //解决session问题
                  "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
                },
                withCredentials: true
              }
            )
            .then(res => {
              console.log(res);

              if (res.data.status == 0) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getList();
              } else {
                this.$message.error("未获得数据");
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    onSave(prize) {
      console.log(this.prize)
      const sendParams = JSON.stringify(this.prize);
      console.log(sendParams);
      this.$Service.post(
          "/api/addOrUpdatePrize.action",
          sendParams,
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.prize = {
              prizeName: "",
              type: null,
              stock: null,
              image: null,
              consumeIntegral: null
            };
            //this.getList();
          } else {
            this.$message.error("新增数据失败");
          }
        }).catch(err=>{
          this.$message.err("新增数据失败，接口原因")
        })
      this.dialogFormVisible = false;
    },
    //图片上传成功
    success(response, file, fileList) {
      console.log(response);
      console.log(file);
      console.log(fileList);
      console.log(response.data.path);
      this.prize.image=response.data.path;


      
    },
    //添加图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 添加图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      this.prize.image = this.dialogImageUrl;
    }
  } //methods
};
</script>
