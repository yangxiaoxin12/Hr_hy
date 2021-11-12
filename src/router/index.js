import Vue from "vue";
import Router from "vue-router";
const login = () => import("@/components/login");
const index = () => import("@/components/index");
// const testLottery = () =>
//     import ('@/components/testLottery')
const testplan = () => import("@/components/markCore/testplan");
const markDocument = () =>
    import("@/components/markCore/markDocument");
const roleaction = () => import("@/components/roleaction/roleaction");
const accountnumber = () => import("@/components/roleaction/accountnumber");
const changepassword = () => import("@/components/roleaction/changepassword");
const systemlog = () => import("@/components/roleaction/systemlog");
const votingDvetails = () =>
    import("@/components/statisticsRanking/votingDvetails");
const testDraw = () => import("@/components/statisticsRanking/testDraw");
const proportion = () => import("@/components/statisticsRanking/proportion");
const votingRanking = () =>
    import("@/components/statisticsRanking/votingRanking"); // 排行
const voteImport = () => import("@/components/statisticsRanking/voteImport"); // 导入
const tableVotingDetails = () =>
    import("@/components/statisticsRanking/tableVotingDetails"); // 导入

const CreateVote = () => import("@/components/markCore/createVote"); // 导入

const createLottery = () =>
    import("@/components/markCore/createLottery"); // 导入
const createQuestion = () =>
    import("@/components/markCore/createQuestion"); // 导入
const createApplication = () =>
    import("@/components/markCore/createApplication"); // 导入

//----------------------------------
const createIntegral = () =>
    import("@/components/markCore/createIntegral"); // 导入
const createSignIn = () =>
    import("@/components/markCore/createSignIn"); // 导入
const createRedPacket = () =>
    import("@/components/markCore/createRedPacket"); // 导入
const createThumbUp = () =>
    import("@/components/markCore/createThumbUp"); // 导入
const voteDetails = () => import("@/components/markCore/voteDetails"); // 导入
const orgBuild = () => import("@/components/pointmanagement/orgBuild"); // 导入
const prizePointList = () =>
    import("@/components/pointmanagement/prizePointList"); // 导入
const jobDescription = () =>
    import("@/components/pointmanagement/jobDescription"); // 导入
const eCard = () => import("@/components/cardvolumemanagement/eCard"); // 导入

const cardvolumemanagement = () =>
    import("@/components/cardvolumemanagement/cardvolumemanagement"); // 导入
const randomcodemanagement = () =>
    import("@/components/cardvolumemanagement/randomcodemanagement"); // 导入
const trainingPlan = () => import("@/components/membercenter/trainingPlan"); // 导入
const trainingImplementation = () =>
    import("@/components/membercenter/trainingImplementation"); // 导入
const learnPlatform = () => import("@/components/membercenter/learnPlatform"); // 导入

const trainingRecords = () =>
    import("@/components/membercenter/trainingRecords"); // 导入
const stock = () =>
    import("@/components/stock/index"); // 导入
const workSpace = () => import("@/components/workSpace/workSpace"); // 导入
const kczl = () => import("@/components/kcpt/kczl"); // 导入
const lhrh = () => import("@/components/kcpt/lhrh"); // 导入
const pxykh = () => import("@/components/kcpt/pxykh"); // 导入

Vue.use(Router);

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
export default new Router({
    routes: [
        // {
        //   path: "/",
        //   name: "login",
        //   component: login
        // },
        {
            path: "/",
            name: "index",
            component: index,
            children: [
                {
                    path: "/workSpace",
                    name: "workSpace",
                    component: workSpace
                },
                {
                    path: "/testplan",
                    name: "testplan",
                    component: testplan,
                    hideInMenu: true
                },
                {
                    path: "/markDocument",
                    name: "markDocument",
                    component: markDocument
                },

                {
                    path: "/roleaction",
                    name: "roleaction",
                    component: roleaction
                },
                {
                    path: "/accountnumber",
                    name: "accountnumber",
                    component: accountnumber
                },
                {
                    path: "/systemlog",
                    name: "systemlog",
                    component: systemlog
                },
                {
                    path: "/changepassword",
                    name: "changepassword",
                    component: changepassword
                },
                {
                    path: "/learnPlatform",
                    name: "learnPlatform",
                    component: learnPlatform
                },
                {
                    path: "/filterRelease",
                    name: "filterRelease",
                    component: resolve =>
                        require([
                            "@/components/activityStatistics/filterRelease.vue"
                        ], resolve)
                },
                {
                    path: "/toExamine",
                    name: "toExamine",
                    component: resolve =>
                        require(["@/components/activityStatistics/toExamine.vue"], resolve)
                },
                {
                    path: "/roleManagement",
                    name: "roleManagement",
                    component: resolve =>
                        require(["@/components/system/roleManagement.vue"], resolve)
                },
                {
                    path: "/rizhi",
                    name: "rizhi",
                    component: resolve =>
                        require(["@/components/activityStatistics/rizhi.vue"], resolve)
                },
                {
                    path: "/dictionary",
                    name: "dictionary",
                    component: resolve =>
                        require(["@/components/activityStatistics/dictionary.vue"], resolve)
                },
                {
                    path: "/postRelease",
                    name: "postRelease",
                    component: resolve =>
                        require([
                            "@/components/activityStatistics/postRelease.vue"
                        ], resolve)
                },
                {
                    path: "/account",
                    name: "account",
                    component: resolve =>
                        require(["@/components/system/account.vue"], resolve)
                },
                {
                    path: "/incos",
                    name: "incos",
                    component: resolve =>
                        require(["@/components/system/index.vue"], resolve)
                },
                {
                    path: "/participation",
                    name: "participation",
                    component: resolve =>
                        require([
                            "@/components/activityStatistics/participation.vue"
                        ], resolve)
                },
                {
                    path: "/recruitPlan",
                    name: "recruitPlan",
                    component: resolve =>
                        require([
                            "@/components/activityStatistics/recruitPlan.vue"
                        ], resolve)
                },
                {
                    path: "/votingDvetails",
                    name: "votingDvetails",
                    component: votingDvetails
                },
                // {
                //     path: '/testLottery',
                //     name: 'testLottery',
                //     component: testLottery
                // },

                {
                    path: "/testDraw",
                    name: "testDraw",
                    component: testDraw
                },
                {
                    path: "/proportion",
                    name: "proportion",
                    component: proportion
                },
                {
                    path: "/votingRanking",
                    name: "votingRanking",
                    component: votingRanking
                },
                {
                    path: "/voteImport",
                    name: "voteImport",
                    component: voteImport
                },
                {
                    path: "/tableVotingDetails",
                    name: "tableVotingDetails",
                    component: tableVotingDetails
                },
                {
                    path: "/CreateVote",
                    name: "CreateVote",
                    component: CreateVote
                },
                {
                    path: "/createLottery",
                    name: "createLottery",
                    component: createLottery
                },
                {
                    path: "/voteDetails",
                    name: "voteDetails",
                    component: voteDetails
                },
                {
                    path: "/createQuestion",
                    name: "createQuestion",
                    component: createQuestion
                },
                {
                    path: "/createApplication",
                    name: "createApplication",
                    component: createApplication
                },
                {
                    path: "/createIntegral",
                    name: "createIntegral",
                    component: createIntegral
                },
                {
                    path: "/createRedPacket",
                    name: "createRedPacket",
                    component: createRedPacket
                },
                {
                    path: "/createSignIn",
                    name: "createSignIn",
                    component: createSignIn
                },
                {
                    path: "/createThumbUp",
                    name: "createThumbUp",
                    component: createThumbUp
                },
                {
                    path: "/orgBuild",
                    name: "orgBuild",
                    component: orgBuild
                },
                {
                    path: "/prizePointList",
                    name: "prizePointList",
                    component: prizePointList
                },

                {
                    path: "/jobDescription",
                    name: "jobDescription",
                    component: jobDescription
                },
                {
                    path: "/cardvolumemanagement",
                    name: "cardvolumemanagement",
                    component: cardvolumemanagement
                },
                {
                    path: "/eCard",
                    name: "eCard",
                    component: eCard
                },
                {
                    path: "/randomcodemanagement",
                    name: "randomcodemanagement",
                    component: randomcodemanagement
                },
                {
                    path: "/trainingPlan",
                    name: "trainingPlan",
                    component: trainingPlan
                },
                {
                    path: "/trainingImplementation",
                    name: "trainingImplementation",
                    component: trainingImplementation
                },

                {
                    path: "/stock",
                    name: "stock",
                    component: stock
                },
                {
                    path: "/trainingRecords",
                    name: "trainingRecords",
                    component: trainingRecords
                },{
                    path: "/kczl",
                    name: "kczl",
                    component: kczl
                },{
                    path: "/lhrh",
                    name: "lhrh",
                    component: lhrh
                },{
                    path: "/pxykh",
                    name: "pxykh",
                    component: pxykh
                }
            ]
        }
    ]
});
