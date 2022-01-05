import Vue from 'vue'

// 日期过滤器
Vue.filter('dateFormat', value => {
    let d = new Date(value)
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()
    return year + '-' + month + '-' + day
})