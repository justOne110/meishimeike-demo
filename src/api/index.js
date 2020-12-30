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
            id:id,
            limit: 10,
            page: 1
        }
    })
}
export default {
    banner,
    getList,
    goDetail,
    getPl
}