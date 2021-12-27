import request from './request'

//get请求
function httpGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'GET',
            params: params
        }).then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })
}

// post请求
function httpPost(url, params = {}, headers = {
    'Content-Type': 'application/json'
}) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'POST',
            data: params,
            headers: headers
        }).then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })
}

// delete请求
function httpDelete(url, params = {}) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'DELETE',
            data: params,
            headers: {}
        }).then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })
}


export {
    httpGet,
    httpPost,
    httpDelete
}