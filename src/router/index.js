import Vue from 'vue'
import Router from 'vue-router'
const login = () =>
    import('@/components/login')
const index = () =>
    import('@/components/index')
// const testLottery = () =>
//     import ('@/components/testLottery')
const activitytheme = () =>
    import('@/components/activitymanagement/activitytheme')
const activitytype = () =>
    import('@/components/activitymanagement/activitytype')
const roleaction = () =>
    import('@/components/roleaction/roleaction')
const accountnumber = () =>
    import('@/components/roleaction/accountnumber')
const changepassword = () =>
    import('@/components/roleaction/changepassword')
const systemlog = () =>
    import('@/components/roleaction/systemlog')
const votingDvetails = () =>
    import('@/components/statisticsRanking/votingDvetails')
const testDraw = () =>
    import('@/components/statisticsRanking/testDraw')
const proportion = () =>
    import('@/components/statisticsRanking/proportion')
const votingRanking = () =>
    import('@/components/statisticsRanking/votingRanking') // 排行
const voteImport = () =>
    import('@/components/statisticsRanking/voteImport') // 导入
const tableVotingDetails = () =>
    import('@/components/statisticsRanking/tableVotingDetails') // 导入

const CreateVote = () =>
    import('@/components/activitymanagement/createVote') // 导入

const createLottery = () =>
    import('@/components/activitymanagement/createLottery') // 导入
const createQuestion = () =>
    import('@/components/activitymanagement/createQuestion') // 导入
const createApplication = () =>
    import('@/components/activitymanagement/createApplication') // 导入

//----------------------------------
const createIntegral = () =>
    import('@/components/activitymanagement/createIntegral') // 导入
const createSignIn = () =>
    import('@/components/activitymanagement/createSignIn') // 导入
const createRedPacket = () =>
    import('@/components/activitymanagement/createRedPacket') // 导入
const createThumbUp = () =>
    import('@/components/activitymanagement/createThumbUp') // 导入
const voteDetails = () =>
    import('@/components/activitymanagement/voteDetails') // 导入
const orgBuild = () =>
    import('@/components/pointmanagement/orgBuild') // 导入
const prizePointList = () =>
    import('@/components/pointmanagement/prizePointList') // 导入
const jobDescription = () =>
    import('@/components/pointmanagement/jobDescription') // 导入
const eCard = () =>
    import('@/components/cardvolumemanagement/eCard') // 导入

const cardvolumemanagement = () =>
    import('@/components/cardvolumemanagement/cardvolumemanagement') // 导入
const randomcodemanagement = () =>
    import('@/components/cardvolumemanagement/randomcodemanagement') // 导入
const membermanagement = () =>
    import('@/components/membercenter/membermanagement') // 导入
const configurationrule = () =>
    import('@/components/membercenter/configurationrule') // 导入
const levelmanagement = () =>
    import('@/components/membercenter/levelmanagement') // 导入

Vue.use(Router)

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login,
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [{
            path: '',
            name: 'activitytype',
            component: activitytype
        },
        {
            path: '/activitytheme',
            name: 'activitytheme',
            component: activitytheme,

        },
        {
            path: '/activitytype',
            name: 'activitytype',
            component: activitytype
        }, {
            path: '/roleaction',
            name: 'roleaction',
            component: roleaction
        },
        {
            path: '/accountnumber',
            name: 'accountnumber',
            component: accountnumber
        },
        {
            path: '/systemlog',
            name: 'systemlog',
            component: systemlog
        },
        {
            path: '/changepassword',
            name: 'changepassword',
            component: changepassword
        },
        {
            path: '/zhongjiang',
            name: 'zhongjiang',
            component: (resolve) => require(['@/components/activityStatistics/zhongjiang.vue'], resolve)
        },
        {
            path: '/tongji',
            name: 'tongji',
            component: (resolve) => require(['@/components/activityStatistics/tongji.vue'], resolve)
        },
        {
            path: '/roleManagement',
            name: 'roleManagement',
            component: (resolve) => require(['@/components/system/roleManagement.vue'], resolve)
        },
        {
            path: '/rizhi',
            name: 'rizhi',
            component: (resolve) => require(['@/components/activityStatistics/rizhi.vue'], resolve)
        },
        {
            path: '/dictionary',
            name: 'dictionary',
            component: (resolve) => require(['@/components/activityStatistics/dictionary.vue'], resolve)
        },
        {
            path: '/votingStatistics',
            name: 'votingStatistics',
            component: (resolve) => require(['@/components/activityStatistics/votingStatistics.vue'], resolve)
        },
        {
            path: '/account',
            name: 'account',
            component: (resolve) => require(['@/components/system/account.vue'], resolve)
        },
        {
            path: '/incos',
            name: 'incos',
            component: (resolve) => require(['@/components/system/index.vue'], resolve)
        },
        {
            path: '/participation',
            name: 'participation',
            component: (resolve) => require(['@/components/activityStatistics/participation.vue'], resolve)
        },
        {
            path: '/activityParticipation',
            name: 'activityParticipation',
            component: (resolve) => require(['@/components/activityStatistics/activityParticipation.vue'], resolve)
        },
        {
            path: '/votingDvetails',
            name: 'votingDvetails',
            component: votingDvetails
        },
        // {
        //     path: '/testLottery',
        //     name: 'testLottery',
        //     component: testLottery
        // },

        {
            path: '/testDraw',
            name: 'testDraw',
            component: testDraw
        },
        {
            path: '/proportion',
            name: 'proportion',
            component: proportion
        },
        {
            path: '/votingRanking',
            name: 'votingRanking',
            component: votingRanking
        },
        {
            path: '/voteImport',
            name: 'voteImport',
            component: voteImport
        },
        {
            path: '/tableVotingDetails',
            name: 'tableVotingDetails',
            component: tableVotingDetails
        },
        {
            path: '/CreateVote',
            name: 'CreateVote',
            component: CreateVote
        },
        {
            path: '/createLottery',
            name: 'createLottery',
            component: createLottery
        },
        {
            path: '/voteDetails',
            name: 'voteDetails',
            component: voteDetails
        },
        {
            path: '/createQuestion',
            name: 'createQuestion',
            component: createQuestion

        },
        {
            path: '/createApplication',
            name: 'createApplication',
            component: createApplication

        },
        {
            path: '/createIntegral',
            name: 'createIntegral',
            component: createIntegral
        },
        {
            path: '/createRedPacket',
            name: 'createRedPacket',
            component: createRedPacket
        },
        {
            path: '/createSignIn',
            name: 'createSignIn',
            component: createSignIn

        },
        {
            path: '/createThumbUp',
            name: 'createThumbUp',
            component: createThumbUp

        },
        {
            path: '/orgBuild',
            name: 'orgBuild',
            component: orgBuild

        },
        {
            path: '/prizePointList',
            name: 'prizePointList',
            component: prizePointList

        },

        {
            path: '/jobDescription',
            name: 'jobDescription',
            component: jobDescription

        },
        {
            path: '/cardvolumemanagement',
            name: 'cardvolumemanagement',
            component: cardvolumemanagement

        },
        {
            path: '/eCard',
            name: 'eCard',
            component: eCard

        },
        {
            path: '/randomcodemanagement',
            name: 'randomcodemanagement',
            component: randomcodemanagement

        },
        {
            path: '/membermanagement',
            name: 'membermanagement',
            component: membermanagement

        },
        {
            path: '/configurationrule',
            name: 'configurationrule',
            component: configurationrule

        },
        {
            path: '/levelmanagement',
            name: 'levelmanagement',
            component: levelmanagement

        },


        ]
    }
    ]
})