import Server from '../utils/request'

// 轮播图
function banner() {
    return Server({
        url: '/banner?',
        method: 'get'
    })
}

// 列表数据
function getList() {
    return Server({
        url: '/recommend/appIndex?',
        method: 'get'
    })
}

// 详情
function goDetail(id) {
    return Server({
        url: '/courseInfo/basis_id=' + id,
        method: 'get',
        // data:{basis_id:id}
    })
}
// 评论
function getPl(id) {
    return Server({
        url: "/courseComment",
        method: "post",
        data: {
            id: id,
            limit: 10,
            page: 1
        }
    })
}

// 获取验证码
function getcode(mobile) {
    return Server({
        url: "/smsCode",
        method: "post",
        data: {
            mobile: mobile,
            sms_type: "login"
        }
    })
}

// 验证码登录
function login(mobile, code) {
    return Server({
        url: "/login",
        method: "post",
        data: {
            mobile: mobile,
            sms_code: code,
            type: 2
        },
        hideloading: false // 隐藏 loading 组件
    })
}
// 密码码登录
function passLogin(mobile, pass) {
    return Server({
        url: "/login",
        method: "post",
        data: {
            mobile: mobile,
            password: pass,
            type: 1
        },
        hideloading: false // 隐藏 loading 组件
    })
}
// 下拉菜单
function dropdown() {
    return Server({
        url: "/courseClassify",
        method: "get",
        
    })
}

//课程数据
function classfiy(){
    return Server({
        url:"/courseBasis?page=1&limit=10&",
        method:"get"
    })
}

// 选择课程年纪
function gradeClassfiy(id){
    return Server({
        url:`/courseBasis?page=1&limit=10&attr_val_id=${id}&`,
        method:"get"
    })
}
// 排序
function sort(order,id){
    return Server({
        url:`/courseBasis?page=1&limit=10&course_type=0&classify_id=&order_by=${order}&attr_val_id=${id}&is_vip=0&`
    })
}

// 约课
function makeClass(type){
    return Server({
        url:"/oto/myInviteCourse/index",
        method:"post",
        data:{
            page:"1",
            limit:"10",
            type:type
        }
    })
}

// 登录信息
function getuser(){
    return Server({
        url:"/getUCenterInfo?",
        method:"get",
        hideloading: true // 隐藏 loading 组件
    })
}

// 修改个人信息
function uesrInfo(){
    return Server({
        url:"/userInfo?",
        method:"get",

    })
}
// 关注的老师
function payTeacher(){
    return Server({
        url:"/collect?page=1&limit=10&type=2&",
        method:"get"
    })
}
// 修改用户名
function setInfos(data){
    return Server({
        url:"/user",
        method:"put",
        data:data
    })
}
export default {
    banner,
    getList,
    goDetail,
    getPl,
    getcode,
    login,
    passLogin,
    dropdown,
    classfiy,
    gradeClassfiy,
    sort,
    makeClass,
    getuser,
    uesrInfo,
    payTeacher,
    setInfos
}