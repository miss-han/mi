import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios/index'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744
  })
  return jsonp(url, data, options)
}

export async function getSingerDetail(singerId) {
  // 信息
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 1664029744,
    singermid: singerId
  })

  // console.log(detail)
  return jsonp(url, data, options)
}

export function getSingVkey(songmid) {
  const url = `/api/getMusic`
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    jsonpCallback: 'MusicJsonCallback8632971973251213',
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    needNewCode: 0,
    cid: 205361747,
    callback: 'MusicJsonCallback8632971973251213',
    uin: 0,
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    guid: 3598100672
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
