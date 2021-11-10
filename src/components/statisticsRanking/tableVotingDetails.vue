<template>
    <div class="votingDetails">
        <div class="searchBar">
            <el-button type="primary" icon="el-icon-download">导出</el-button>
            <el-button type="primary" @click="$router.back(-1)" icon="el-icon-arrow-left">返回</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" :index="indexMethod">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="80">
            </el-table-column>
            <el-table-column prop="users" label="用户" width="100">
            </el-table-column>
            <el-table-column prop="ipone" label="电话号码" width="180">
            </el-table-column>
            <el-table-column prop="time" label="投票时间" width="180">
            </el-table-column>
            <el-table-column prop="CODE" label="媒资CODE" width="100">
            </el-table-column>
            <el-table-column prop="ip" label="IP地址" width="100">
            </el-table-column>
            <el-table-column prop="MacAdress" label="Mac地址" width="180">
            </el-table-column>
            <el-table-column label="是否为增值" width="100">
                <template slot-scope="scope">
                    <div v-if="scope.row.isFlag === 'true'">是</div>
                    <div v-if="scope.row.isFlag === 'false'">否</div>
                </template>
</el-table-column>
<el-table-column prop="description" label="描述">
</el-table-column>
</el-table>
</div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    name: '周杰伦',
                    users: 'admin1',
                    ipone: '13900134489',
                    time: '2020-01-14 17:59:46',
                    CODE: 1,
                    ip: '127.0.01',
                    MacAdress: '00-FF-53-FA-PE-DB',
                    isFlag: 'false',
                    description: '打死你个小瘪三'
                }, {
                    name: '梅长苏',
                    users: 'admin',
                    ipone: '15897911598',
                    time: '2020-01-21 17:59:46',
                    CODE: 1,
                    ip: '127.22.0.1',
                    MacAdress: '00-FF-86-FA-PE-DB',
                    isFlag: 'true',
                    description: '琅琊榜首，江左梅郎'
                }, {
                    name: '蔺晨',
                    users: '狼牙阁',
                    ipone: '13597568894',
                    time: '2020-12-14 17:59:46',
                    CODE: 3,
                    ip: '127.0.98.1',
                    MacAdress: 'SS-FF-53-FA-PE-DB',
                    isFlag: 'false',
                    description: '打死你个小瘪三'
                }, {
                    name: '小飞流',
                    users: 'adminuser',
                    ipone: '13900131101',
                    time: '2018-01-14 17:59:46',
                    CODE: 2,
                    ip: '127.55.01',
                    MacAdress: 'GG-FF-53-FA-PE-DB',
                    isFlag: 'false',
                    description: '别跑再打，保证不打死你'
                }],
            }
        },
        methods: {
            // 序号显示
            indexMethod(index) {
                return index + 1;
            },
        },
    }
</script>